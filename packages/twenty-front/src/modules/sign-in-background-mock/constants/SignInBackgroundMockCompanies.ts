export const SIGN_IN_BACKGROUND_MOCK_COMPANIES = [
  {
    __typename: 'Company',
    id: '04b2e9f5-0713-40a5-8216-82802401d33e',
    domainName: 'qonto.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 1400,
    name: 'Qonto',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: 'OLINDA SAS',
      addressStreet2: '18 rue de Navarin',
      addressCity: 'Paris',
      addressPostcode: '75009',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '240da2ec-2d40-4e49-8df4-9c6a049190df',
            email: 'bertrand.voulzy@google.com',
            avatarUrl:
              'person-picture/original/7e4d491e-5482-4c9f-a490-a4d1b62da10f.38',
            phone: '+33788901234',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '04b2e9f5-0713-40a5-8216-82802401d33e',
            jobTitle: 'zdf',
            xLink: {
              __typename: 'Link',
              label: 'asd',
              url: 'asd.com',
            },
            name: {
              __typename: 'FullName',
              firstName: 'Bertrand',
              lastName: 'Voulzy',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: 'asd',
              url: 'asd.com',
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'qonto',
      url: 'https://www.linkedin.com/company/qonto',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [
        {
          __typename: 'ActivityTargetEdge',
          node: {
            __typename: 'ActivityTarget',
            id: '97114d7e-2a80-4401-af58-36c88e13e852',
            activityId: '737a6c31-610a-457b-b087-791ac700fa46',
            createdAt: '2023-11-24T13:15:03.523Z',
            updatedAt: '2023-11-24T13:15:03.523Z',
            companyId: '04b2e9f5-0713-40a5-8216-82802401d33e',
            personId: null,
          },
        },
        {
          __typename: 'ActivityTargetEdge',
          node: {
            __typename: 'ActivityTarget',
            id: 'cb29d37a-3d5e-4efb-afa3-38f4bff69912',
            activityId: '3c6ea4a3-f71d-4c31-9dfa-f868a5de4091',
            createdAt: '2023-11-24T13:14:57.628Z',
            updatedAt: '2023-11-24T13:14:57.628Z',
            companyId: '04b2e9f5-0713-40a5-8216-82802401d33e',
            personId: null,
          },
        },
      ],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '0d940997-c21e-4ec2-873b-de4264d89025',
    domainName: 'google.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 72_000,
    name: 'Google',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '1600 Amphitheatre Pkwy',
      addressStreet2: 'Mountain View',
      addressState: 'CA',
      addressPostcode: '94043',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '240da2ec-2d40-4e49-8df4-9c6a049190ef',
            email: 'madison.perez@google.com',
            avatarUrl: null,
            phone: '+33788901234',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '0d940997-c21e-4ec2-873b-de4264d89025',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Madison',
              lastName: 'Perez',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '56955422-5d54-41b7-ba36-f0d20e1417ae',
            email: 'avery.carter@airbnb.com',
            avatarUrl: null,
            phone: '+33786789012',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '0d940997-c21e-4ec2-873b-de4264d89025',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Avery',
              lastName: 'Carter',
            },
            city: 'New York',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '755035db-623d-41fe-92e7-dd45b7c568e1',
            email: 'ethan.mitchell@google.com',
            avatarUrl: null,
            phone: '+33787890123',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '0d940997-c21e-4ec2-873b-de4264d89025',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Ethan',
              lastName: 'Mitchell',
            },
            city: 'Los Angeles',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: 'a2e78a5f-338b-46df-8811-fa08c7d19d35',
            email: 'elizabeth.baker@airbnb.com',
            avatarUrl: null,
            phone: '+33784567890',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '0d940997-c21e-4ec2-873b-de4264d89025',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Elizabeth',
              lastName: 'Baker',
            },
            city: 'New York',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: 'ca1f5bf3-64ad-4b0e-bbfd-e9fd795b7016',
            email: 'christopher.nelson@airbnb.com',
            avatarUrl: null,
            phone: '+33785678901',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '0d940997-c21e-4ec2-873b-de4264d89025',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Christopher',
              lastName: 'Nelson',
            },
            city: 'San Francisco',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'google',
      url: 'https://www.linkedin.com/company/google',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '118995f3-5d81-46d6-bf83-f7fd33ea6102',
    domainName: 'facebook.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 87_000,
    name: 'Facebook',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '1 Hacker Way',
      addressStreet2: 'Menlo Park',
      addressState: 'CA',
      addressPostcode: '94025',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '93c72d2e-f517-42fd-80ae-14173b3b70ae',
            email: 'christopher.gonzalez@qonto.com',
            avatarUrl: null,
            phone: '+33789012345',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '118995f3-5d81-46d6-bf83-f7fd33ea6102',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Christopher',
              lastName: 'Gonzalez',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: 'eeeacacf-eee1-4690-ad2c-8619e5b56a2e',
            email: 'ashley.parker@qonto.com',
            avatarUrl: null,
            phone: '+33780123456',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '118995f3-5d81-46d6-bf83-f7fd33ea6102',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Ashley',
              lastName: 'Parker',
            },
            city: 'Los Angeles',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'facebook',
      url: 'https://www.linkedin.com/company/facebook',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [
        {
          __typename: 'OpportunityEdge',
          node: {
            __typename: 'Opportunity',
            id: '53f66647-0543-4cc2-9f96-95cc699960f2',
            pointOfContactId: '93c72d2e-f517-42fd-80ae-14173b3b70ae',
            stage: 'NEW',
            amount: {
              __typename: 'Currency',
              amountMicros: 2000000,
              currencyCode: 'USD',
            },
            createdAt: '2023-11-23T15:38:03.703Z',
            closeDate: '2023-11-23T15:38:03.703Z',
            personId: '93c72d2e-f517-42fd-80ae-14173b3b70ae',
            companyId: '118995f3-5d81-46d6-bf83-f7fd33ea6102',
            updatedAt: '2023-11-23T15:38:03.703Z',
          },
        },
      ],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '1d3a1c6e-707e-44dc-a1d2-30030bf1a944',
    domainName: 'netflix.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 3_000,
    name: 'Netflix',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '121 Albright Way',
      addressStreet2: 'Los Gatos',
      addressState: 'CA',
      addressPostcode: '95032',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'netflix',
      url: 'https://www.linkedin.com/company/netflix',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '460b6fb1-ed89-413a-b31a-962986e67bb4',
    domainName: 'microsoft.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 221_000,
    name: 'Microsoft',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '1 Microsoft Way',
      addressStreet2: 'Redmond',
      addressState: 'WA',
      addressPostcode: '98052',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '1d151852-490f-4466-8391-733cfd66a0c8',
            email: 'isabella.scott@microsoft.com',
            avatarUrl: null,
            phone: '+33782345678',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '460b6fb1-ed89-413a-b31a-962986e67bb4',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Isabella',
              lastName: 'Scott',
            },
            city: 'New York',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '98406e26-80f1-4dff-b570-a74942528de3',
            email: 'matthew.green@microsoft.com',
            avatarUrl: null,
            phone: '+33783456789',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '460b6fb1-ed89-413a-b31a-962986e67bb4',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Matthew',
              lastName: 'Green',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '9b324a88-6784-4449-afdf-dc62cb8702f2',
            email: 'nicholas.wright@microsoft.com',
            avatarUrl: null,
            phone: '+33781234567',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: '460b6fb1-ed89-413a-b31a-962986e67bb4',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Nicholas',
              lastName: 'Wright',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'microsoft',
      url: 'https://www.linkedin.com/company/microsoft',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [
        {
          __typename: 'OpportunityEdge',
          node: {
            __typename: 'Opportunity',
            id: '81ab695d-2f89-406f-90ea-180f433b2445',
            stage: 'NEW',
            pointOfContactId: '9b324a88-6784-4449-afdf-dc62cb8702f2',
            amount: {
              __typename: 'Currency',
              amountMicros: 300000,
              currencyCode: 'USD',
            },
            createdAt: '2023-11-23T15:38:03.703Z',
            closeDate: '2023-11-23T15:38:03.703Z',
            personId: '9b324a88-6784-4449-afdf-dc62cb8702f2',
            companyId: '460b6fb1-ed89-413a-b31a-962986e67bb4',
            updatedAt: '2023-11-23T15:38:03.703Z',
          },
        },
        {
          __typename: 'OpportunityEdge',
          node: {
            __typename: 'Opportunity',
            id: '9b059852-35b1-4045-9cde-42f715148954',
            stage: 'NEW',
            pointOfContactId: '98406e26-80f1-4dff-b570-a74942528de3',
            amount: {
              __typename: 'Currency',
              amountMicros: 4000000,
              currencyCode: 'USD',
            },
            createdAt: '2023-11-23T15:38:03.703Z',
            closeDate: '2023-11-23T15:38:03.703Z',
            personId: '98406e26-80f1-4dff-b570-a74942528de3',
            companyId: '460b6fb1-ed89-413a-b31a-962986e67bb4',
            updatedAt: '2023-11-23T15:38:03.703Z',
          },
        },
      ],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '7a93d1e5-3f74-492d-a101-2a70f50a1645',
    domainName: 'libeo.io',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 50,
    name: 'Libeo',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '42 rue de paradis',
      addressCity: 'Paris',
      addressPostcode: '75010',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'libeo',
      url: 'https://www.linkedin.com/company/libeo',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '89bb825c-171e-4bcc-9cf7-43448d6fb278',
    domainName: 'airbnb.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 6_000,
    name: 'Airbnb',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '888 Brannan Street',
      addressCity: 'San Francisco',
      addressState: 'CA',
      addressPostcode: '75010',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'airbnb',
      url: 'https://www.linkedin.com/company/airbnb',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: '9d162de6-cfbf-4156-a790-e39854dcd4eb',
    domainName: 'claap.io',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 7,
    name: 'Claap',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '901 Fifth Avenue',
      addressStreet2: 'Suite 1200',
      addressCity: 'Seattle',
      addressState: 'WA',
      addressPostcode: '98164',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'claap',
      url: 'https://www.linkedin.com/company/claap',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: 'a674fa6c-1455-4c57-afaf-dd5dc086361d',
    domainName: 'algolia.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 250,
    name: 'Algolia',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '3790 El Camino Real',
      addressStreet2: 'Unit 518',
      addressCity: 'Palo Alto',
      addressState: 'CA',
      addressPostcode: '94306',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '240da2ec-2d40-4e49-8df4-9c6a049191df',
            email: 'lorie.vladim@google.com',
            avatarUrl: null,
            phone: '+33788901235',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: 'a674fa6c-1455-4c57-afaf-dd5dc086361d',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Lorie',
              lastName: 'Vladim',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'algolia',
      url: 'https://www.linkedin.com/company/algolia',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: 'a7bc68d5-f79e-40dd-bd06-c36e6abb4678',
    domainName: 'samsung.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 400_000,
    name: 'Samsung',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '129, Samsung-ro',
      addressStreet2: 'Yeongtong-gu, Suwon-si',
      addressCity: 'Gyeonggi-do',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '240da2ec-2d40-4e49-8df4-9c6a049191de',
            email: 'louis.duss@google.com',
            avatarUrl: null,
            phone: '+33788901234',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: 'a7bc68d5-f79e-40dd-bd06-c36e6abb4678',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Louis',
              lastName: 'Duss',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'samsung',
      url: 'https://www.linkedin.com/company/samsung',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: 'aaffcfbd-f86b-419f-b794-02319abe8637',
    domainName: 'hasura.io',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 17_000,
    name: 'Hasura',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '576 Folsom St.',
      addressStreet2: 'Floor 3',
      addressCity: 'San Francisco',
      addressState: 'CA',
      addressPostcode: '94105',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'hasura',
      url: 'https://www.linkedin.com/company/hasura',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: 'f33dc242-5518-4553-9433-42d8eb82834b',
    domainName: 'wework.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 2_000,
    name: 'Wework',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '575 Lexington Ave 16th Floor',
      addressCity: 'New York',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'wework',
      url: 'https://www.linkedin.com/company/wework',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
  {
    __typename: 'Company',
    id: 'fe256b39-3ec3-4fe3-8997-b76aa0bfa408',
    domainName: 'linkedin.com',
    updatedAt: '2023-11-23T15:38:03.699Z',
    employees: 20_000,
    name: 'Linkedin',
    favorites: {
      __typename: 'FavoriteConnection',
      edges: [],
    },
    address: {
      addressStreet1: '315 Montgomery St',
      addressStreet2: '13th Fl.',
      addressCity: 'San Francisco',
      addressState: 'CA',
      addressPostcode: '94104',
    },
    accountOwner: null,
    people: {
      __typename: 'PersonConnection',
      edges: [
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '0aa00beb-ac73-4797-824e-87a1f5aea9e0',
            email: 'sylvie.palmer@linkedin.com',
            avatarUrl: null,
            phone: '+33780123456',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: 'fe256b39-3ec3-4fe3-8997-b76aa0bfa408',
            jobTitle: '',
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Sylvie',
              lastName: 'Palmer',
            },
            city: 'Los Angeles',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
        {
          __typename: 'PersonEdge',
          node: {
            __typename: 'Person',
            id: '86083141-1c0e-494c-a1b6-85b1c6fefaa5',
            email: 'christoph.calisto@linkedin.com',
            avatarUrl: null,
            phone: '+33789012345',
            createdAt: '2023-11-23T15:38:03.700Z',
            companyId: 'fe256b39-3ec3-4fe3-8997-b76aa0bfa408',
            jobTitle: null,
            xLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
            name: {
              __typename: 'FullName',
              firstName: 'Christoph',
              lastName: 'Callisto',
            },
            city: 'Seattle',
            updatedAt: '2023-11-23T15:38:03.700Z',
            linkedinLink: {
              __typename: 'Link',
              label: null,
              url: null,
            },
          },
        },
      ],
    },
    attachments: {
      __typename: 'AttachmentConnection',
      edges: [],
    },
    createdAt: '2023-11-23T15:38:03.699Z',
    idealCustomerProfile: null,
    linkedinLink: {
      __typename: 'Link',
      label: 'linkedin',
      url: 'https://www.linkedin.com/company/linkedin',
    },
    opportunities: {
      __typename: 'OpportunityConnection',
      edges: [
        {
          __typename: 'OpportunityEdge',
          node: {
            __typename: 'Opportunity',
            id: '7c887ee3-be10-412b-a663-16bd3c2228e1',
            stage: 'NEW',
            pointOfContactId: '86083141-1c0e-494c-a1b6-85b1c6fefaa5',
            amount: {
              __typename: 'Currency',
              amountMicros: 100000,
              currencyCode: 'USD',
            },
            createdAt: '2023-11-23T15:38:03.703Z',
            closeDate: '2023-11-23T15:38:03.703Z',
            personId: '86083141-1c0e-494c-a1b6-85b1c6fefaa5',
            companyId: 'fe256b39-3ec3-4fe3-8997-b76aa0bfa408',
            updatedAt: '2023-11-23T15:38:03.703Z',
          },
        },
      ],
    },
    accountOwnerId: null,
    xLink: {
      __typename: 'Link',
      label: null,
      url: null,
    },
    activityTargets: {
      __typename: 'ActivityTargetConnection',
      edges: [],
    },
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: null,
    },
  },
];
