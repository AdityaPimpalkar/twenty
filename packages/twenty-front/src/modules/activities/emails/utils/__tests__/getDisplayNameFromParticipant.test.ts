import { EmailThreadMessageParticipant } from '@/activities/emails/types/EmailThreadMessageParticipant';
import {
  WorkspaceMemberDateFormatEnum,
  WorkspaceMemberTimeFormatEnum
} from '~/generated/graphql';

import { getDisplayNameFromParticipant } from '../getDisplayNameFromParticipant';

describe('getDisplayNameFromParticipant', () => {
  const participantWithName: EmailThreadMessageParticipant = {
    displayName: '',
    handle: '',
    role: 'from',
    person: {
      __typename: 'Person',
      id: '1',
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      avatarUrl: '',
      jobTitle: '',
      linkedinLink: {
        primaryLinkUrl: '',
        primaryLinkLabel: '',
      },
      xLink: {
        primaryLinkUrl: '',
        primaryLinkLabel: '',
      },
      city: '',
      email: '',
      phone: '',
      companyId: '',
    },
    workspaceMember: {
      __typename: 'WorkspaceMember',
      id: '1',
      name: {
        firstName: 'Jane',
        lastName: 'Smith',
      },
      locale: 'en',
      createdAt: '',
      updatedAt: '',
      userEmail: '',
      userId: '',
      timeZone: 'system',
      dateFormat: WorkspaceMemberDateFormatEnum.System,
      timeFormat: WorkspaceMemberTimeFormatEnum.System,
    },
  };

  const participantWithHandle: any = {
    displayName: '',
    handle: 'user_handle',
    role: 'from',
  };

  const participantWithDisplayName: any = {
    displayName: 'User123',
    handle: '',
    role: 'from',
  };

  const participantWithoutInfo: any = {
    displayName: '',
    handle: '',
    role: 'from',
  };

  it('should return full name when shouldUseFullName is true', () => {
    expect(
      getDisplayNameFromParticipant({
        participant: participantWithName,
        shouldUseFullName: true,
      }),
    ).toBe('John Doe');
  });

  it('should return first name when shouldUseFullName is false', () => {
    expect(
      getDisplayNameFromParticipant({ participant: participantWithName }),
    ).toBe('John');
  });

  it('should return displayName if it is a non-empty string', () => {
    expect(
      getDisplayNameFromParticipant({
        participant: participantWithDisplayName,
      }),
    ).toBe('User123');
  });

  it('should return handle if displayName is not available', () => {
    expect(
      getDisplayNameFromParticipant({ participant: participantWithHandle }),
    ).toBe('user_handle');
  });

  it('should return Unknown if no suitable information is available', () => {
    expect(
      getDisplayNameFromParticipant({ participant: participantWithoutInfo }),
    ).toBe('Unknown');
  });
});
