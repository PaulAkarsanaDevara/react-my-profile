import { lazy } from 'react';

/**
 * Lazily loaded shared components. Each one is a separate chunk, so they must
 * be rendered inside a <Suspense> boundary (see RootLayout / PageTransition).
 */
function MyComponent() {
  const Heading = lazy(() => import('./Heading'));
  const TopMenuNavigation = lazy(() => import('./navbar/TopNavigation'));
  const BottomNavigation = lazy(() => import('./navbar/BottomNavigation'));
  const ButtonActionDefault = lazy(
    () => import('./button/ButtonActionDefault')
  );
  const ButtonActionDownload = lazy(
    () => import('./button/ButtonActionDownload')
  );
  const ButtonActionRedirect = lazy(
    () => import('./button/ButtonActionRedirect')
  );
  const ButtonAction = lazy(() => import('./button/ButtonAction'));

  const ProfileHeading = lazy(() => import('../v1/profile/ProfileHeading'));
  const ProfileInfo = lazy(() => import('../v1/profile/ProfileInfo'));
  const ProfileInfoAboutMe = lazy(
    () => import('../v1/profile/ProfileInfoAboutMe')
  );
  const ProfileSummary = lazy(() => import('../v1/profile/ProfileSummary'));
  const EducationItem = lazy(() => import('../v1/education/EducationItem'));
  const EducationItemList = lazy(
    () => import('../v1/education/EducationItemList')
  );
  const ExperienceItem = lazy(() => import('../v1/experience/ExperienceItem'));
  const ExperienceListItem = lazy(
    () => import('../v1/experience/ExperienceListItem')
  );
  const ProjectItem = lazy(() => import('../v1/portofolio/ProjectItem'));
  const ProjectListItem = lazy(
    () => import('../v1/portofolio/ProjectListItem')
  );
  const SertifikasiItem = lazy(
    () => import('../v1/certificate/SertifikasiItem')
  );
  const SertifikasiListItem = lazy(
    () => import('../v1/certificate/SertifikasiListItem')
  );
  const ProjectSearchInput = lazy(
    () => import('../v1/portofolio/ProjectSearchInput')
  );
  const ProjectSearchEmpty = lazy(
    () => import('../v1/portofolio/ProjectSearchEmpty')
  );

  return {
    Heading,
    TopMenuNavigation,
    BottomNavigation,
    ButtonAction,
    ButtonActionDefault,
    ButtonActionDownload,
    ButtonActionRedirect,
    ProfileInfo,
    ProfileHeading,
    ProfileInfoAboutMe,
    ProfileSummary,
    EducationItem,
    EducationItemList,
    ExperienceItem,
    ExperienceListItem,
    ProjectItem,
    ProjectListItem,
    SertifikasiItem,
    SertifikasiListItem,
    ProjectSearchEmpty,
    ProjectSearchInput,
  };
}

export const MyComponentInstance = MyComponent();

export default MyComponent;
