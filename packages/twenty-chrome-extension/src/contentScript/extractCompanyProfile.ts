import { createDefaultButton } from '~/contentScript/createButton';
import changeSidePanelUrl from '~/contentScript/utils/changeSidepanelUrl';
import extractCompanyLinkedinLink from '~/contentScript/utils/extractCompanyLinkedinLink';
import extractDomain from '~/contentScript/utils/extractDomain';
import { createCompany, fetchCompany } from '~/db/company.db';
import { CompanyInput } from '~/db/types/company.types';
import { isDefined } from '~/utils/isDefined';

export const checkIfCompanyExists = async () => {
  const { tab: activeTab } = await chrome.runtime.sendMessage({
    action: 'getActiveTab',
  });

  const companyURL = extractCompanyLinkedinLink(activeTab.url);

  return await fetchCompany({
    linkedinLink: {
      url: { eq: companyURL },
      label: { eq: companyURL },
    },
  });
};

export const addCompany = async () => {
  // Extract company-specific data from the DOM
  const companyNameElement = document.querySelector(
    '.org-top-card-summary__title',
  );
  const domainNameElement = document.querySelector(
    '.org-top-card-primary-actions__inner a',
  );
  const addressElement = document.querySelectorAll(
    '.org-top-card-summary-info-list__info-item',
  )[1];
  const employeesNumberElement = document.querySelectorAll(
    '.org-top-card-summary-info-list__info-item',
  )[3];

  // Get the text content or other necessary data from the DOM elements
  const companyName = companyNameElement
    ? companyNameElement.getAttribute('title')
    : '';
  const domainName = extractDomain(
    domainNameElement && domainNameElement.getAttribute('href'),
  );
  const address = addressElement
    ? addressElement.textContent?.trim().replace(/\s+/g, ' ')
    : '';
  const employees = employeesNumberElement
    ? Number(
        employeesNumberElement.textContent
          ?.trim()
          .replace(/\s+/g, ' ')
          .split('-')[0],
      )
    : 0;

  // Prepare company data to send to the backend
  const companyInputData: CompanyInput = {
    name: companyName ?? '',
    domainName: domainName,
    address: address ?? '',
    employees: employees,
  };

  // Extract active tab url using chrome API - an event is triggered here and is caught by background script.
  const { tab: activeTab } = await chrome.runtime.sendMessage({
    action: 'getActiveTab',
  });

  // Convert URLs like https://www.linkedin.com/company/twenty/about/ to https://www.linkedin.com/company/twenty
  const companyURL = extractCompanyLinkedinLink(activeTab.url);
  companyInputData.linkedinLink = { url: companyURL, label: companyURL };

  const companyId = await createCompany(companyInputData);

  if (isDefined(companyId)) {
    await changeSidePanelUrl(
      `${import.meta.env.VITE_FRONT_BASE_URL}/object/company/${companyId}`,
    );
  }

  return companyId;
};

export const insertButtonForCompany = async () => {
  const companyButtonDiv = createDefaultButton('twenty-company-btn');

  const parentDiv: HTMLDivElement | null = document.querySelector(
    '.org-top-card-primary-actions__inner',
  );

  if (isDefined(parentDiv)) {
    Object.assign(companyButtonDiv.style, {
      marginLeft: '.8rem',
      marginTop: '.4rem',
    });
    parentDiv.prepend(companyButtonDiv);
  }

  const companyButtonSpan = companyButtonDiv.getElementsByTagName('span')[0];
  const company = await checkIfCompanyExists();

  const openCompanyOnSidePanel = (companyId: string) => {
    companyButtonSpan.textContent = 'View in Twenty';
    companyButtonDiv.onClickHandler(async () => {
      await changeSidePanelUrl(
        `${import.meta.env.VITE_FRONT_BASE_URL}/object/company/${companyId}`,
      );
      chrome.runtime.sendMessage({ action: 'openSidepanel' });
    });
  };

  if (isDefined(company)) {
    if (isDefined(company.id)) openCompanyOnSidePanel(company.id);
  } else {
    companyButtonSpan.textContent = 'Add to Twenty';

    companyButtonDiv.onClickHandler(async () => {
      companyButtonSpan.textContent = 'Saving...';
      const companyId = await addCompany();
      if (isDefined(companyId)) {
        openCompanyOnSidePanel(companyId);
      } else {
        companyButtonSpan.textContent = 'Try again';
      }
    });
  }
};
