export class FollowUnfollowError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'FollowUnfollowError';
  }
}

export class ProfileDataSaveError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'ProfileDataSaveError';
  }
}

export class ProfileStatusSaveError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'ProfileStatusSaveError';
  }
}

export class ProfilePhotoSaveError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'ProfilePhotoSaveError';
  }
}