import { AvatarChip, AvatarChipVariant } from 'twenty-ui';

import { PreComputedChipGeneratorsContext } from '@/object-metadata/context/PreComputedChipGeneratorsContext';
import { generateDefaultRecordChipData } from '@/object-metadata/utils/generateDefaultRecordChipData';
import { getLinkToShowPage } from '@/object-metadata/utils/getLinkToShowPage';
import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { isNonEmptyString } from '@sniptt/guards';
import { MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export type RecordChipProps = {
  objectNameSingular: string;
  record: ObjectRecord;
  className?: string;
  variant?: AvatarChipVariant;
};

export const RecordChip = ({
  objectNameSingular,
  record,
  className,
  variant,
}: RecordChipProps) => {
  const navigate = useNavigate();
  const { identifierChipGeneratorPerObject } = useContext(
    PreComputedChipGeneratorsContext,
  );

  const generateRecordChipData =
    identifierChipGeneratorPerObject[objectNameSingular] ??
    generateDefaultRecordChipData;

  const recordChipData = generateRecordChipData(record);

  const handleAvatarChipClick = (event: MouseEvent) => {
    const linkToShowPage = getLinkToShowPage(objectNameSingular, record);

    if (isNonEmptyString(linkToShowPage)) {
      event.stopPropagation();
      navigate(linkToShowPage);
    }
  };

  return (
    <AvatarChip
      placeholderColorSeed={record.id}
      name={recordChipData.name}
      avatarType={recordChipData.avatarType}
      avatarUrl={recordChipData.avatarUrl ?? ''}
      onClick={handleAvatarChipClick}
      className={className}
      variant={variant}
    />
  );
};
