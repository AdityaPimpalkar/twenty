import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@/object-metadata/types/ObjectMetadataItem';
import { RecordGqlOperationSignatureFactory } from '@/object-record/graphql/types/RecordGqlOperationSignatureFactory';
import { generateDepthOneRecordGqlFields } from '@/object-record/graphql/utils/generateDepthOneRecordGqlFields';

export const findOneRecordForShowPageOperationSignatureFactory: RecordGqlOperationSignatureFactory =
  ({ objectMetadataItem }: { objectMetadataItem: ObjectMetadataItem }) => ({
    objectNameSingular: CoreObjectNameSingular.Activity,
    variables: {},
    fields: generateDepthOneRecordGqlFields({ objectMetadataItem }),
  });
