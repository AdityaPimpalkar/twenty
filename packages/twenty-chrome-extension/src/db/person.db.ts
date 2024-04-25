import {
  CreatePersonResponse,
  FindPersonResponse,
  PersonInput,
} from '~/db/types/person.types';
import { Person, PersonFilterInput } from '~/generated/graphql';
import { CREATE_PERSON } from '~/graphql/person/mutations/createPerson';
import { FIND_MANY_PEOPLE } from '~/graphql/person/queries/findManyPeople';
import { isDefined } from '~/utils/isDefined';

import { callMutation, callQuery } from '../utils/requestDb';

export const fetchPerson = async (
  personFilterData: PersonFilterInput,
): Promise<Person | null> => {
  try {
    const data = await callQuery<FindPersonResponse>(FIND_MANY_PEOPLE, {
      filter: {
        ...personFilterData,
      },
    });
    if (isDefined(data?.people.edges)) {
      return data?.people.edges.length > 0 ? data?.people.edges[0].node : null;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const createPerson = async (
  person: PersonInput,
): Promise<string | null> => {
  try {
    const data = await callMutation<CreatePersonResponse>(CREATE_PERSON, {
      input: person,
    });
    if (isDefined(data?.createPerson)) {
      return data.createPerson.id;
    }
    return null;
  } catch (error) {
    return null;
  }
};
