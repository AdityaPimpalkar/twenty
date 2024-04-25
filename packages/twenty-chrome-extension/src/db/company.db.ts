import {
  CompanyInput,
  CreateCompanyResponse,
  FindCompanyResponse,
} from '~/db/types/company.types';
import { Company, CompanyFilterInput } from '~/generated/graphql';
import { CREATE_COMPANY } from '~/graphql/company/mutations/createCompany';
import { FIND_MANY_COMPANIES } from '~/graphql/company/queries/findManyCompanies';
import { isDefined } from '~/utils/isDefined';

import { callMutation, callQuery } from '../utils/requestDb';

export const fetchCompany = async (
  companyfilerInput: CompanyFilterInput,
): Promise<Company | null> => {
  try {
    const data = await callQuery<FindCompanyResponse>(FIND_MANY_COMPANIES, {
      filter: {
        ...companyfilerInput,
      },
    });
    if (isDefined(data?.companies.edges)) {
      return data?.companies.edges.length > 0
        ? data?.companies.edges[0].node
        : null;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const createCompany = async (
  company: CompanyInput,
): Promise<string | null> => {
  try {
    const data = await callMutation<CreateCompanyResponse>(CREATE_COMPANY, {
      input: company,
    });
    if (isDefined(data)) {
      return data.createCompany.id;
    }
    return null;
  } catch (error) {
    return null;
  }
};
