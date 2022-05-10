// typing of user proto file

/**
 * Param pass into method
 */
type UserByFullName = {
  userId: string;
};

/**
 * Return type of method
 */
type UserFullName = {
  fullName: string;
};

export interface IGrpcUserService {
  /**
   * Method defined in user.proto file
   */
  FindName: (params: UserByFullName) => UserFullName;
}
