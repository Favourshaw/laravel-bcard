// types/UsersPageProps.ts
import { PageProps } from '@inertiajs/core';
import { ProfileData } from './profileData';

export interface UsersPgProps extends PageProps {
    profileData: ProfileData;
    isOwner?: boolean;
}
