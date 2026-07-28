export enum Role {
  Admin = "Manager",
  User = "Student",
}

export enum Actions {
  adminpanelCreate = "adminpanelCreate",
  adminpanelEdit = "adminpanelEdit",
  adminpanelDelete = "adminpanelDelete",
  adminpanelView = "adminpanelView",
}

export const ACTION_PERMISSIONS: Record<Role, Actions[]> = {
  [Role.Admin]: [
    Actions.adminpanelCreate,
    Actions.adminpanelDelete,
    Actions.adminpanelEdit,
    Actions.adminpanelView,
  ],
  [Role.User]: [],
};
