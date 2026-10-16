import * as React from 'react';
import ProfileHeading from './ProfileHeading';
import ProfileSummary from './ProfileSummary';
import { MyComponentInstance } from '../../shared/MyComponent';
import Reveal from '../../shared/motion/Reveal';
import { useI18n } from '../../../../i18n/useI18n';

type IProps = { headingName: string; summary: string };

const ProfileInfoAboutme: React.FC<IProps> = ({ summary, headingName }) => {
  const { t } = useI18n();
  const content = (
    <Reveal>
    <div className="profile-summary">
      <ProfileHeading heading={headingName} />
      <ProfileSummary summary={summary} />
      <div className="profile-summary__action">
        <div className="d-flex justify-content-start align-content-start g-3">
          <MyComponentInstance.ButtonAction
            isBlank={false}
            isDownload={true}
            name={t('profile.downloadCv')}
            links="/uploads/CV FARHAN EN.pdf"
            icons=""
          />
          <MyComponentInstance.ButtonAction
            isBlank={false}
            isDownload={false}
            name={t('profile.aboutMe')}
            links="/me"
            icons=""
          />
        </div>
      </div>
    </div>
    </Reveal>
  );

  return content;
};

export default ProfileInfoAboutme;
