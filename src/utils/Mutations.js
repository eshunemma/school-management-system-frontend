import { gql } from "@apollo/client";

// Mutations

export const Login_Mutation = gql`
  mutation SignIn($data: UserInput) {
    signIn(data: $data) {
      message
      token
    }
  }
`;
export const SignUp_Mutation = gql`
  mutation SignUp($data: UserInput) {
    signUp(data: $data) {
      message
      token
    }
  }
`;
export const AddStaff_Mutation = gql`
  mutation AddStaff($data: staffInput) {
    addStaff(data: $data) {
      id
      staffId
      staffName
      DOB
      destination
      phoneNumber
      email
      nationalId
      snnitId
      dateJoined
      active
      createdAt
      updatedAt
    }
  }
`;
export const AddClass_Mutation = gql`
  mutation AddClass($data: classInput) {
    addClass(data: $data) {
      id
      class_name
      department_id
      staff_id
    }
  }
`;
export const AddDepartment_Mutation = gql`
  mutation AddDepartment($data: departmentInput) {
    addDepartment(data: $data) {
      id
      name
    }
  }
`;

// Query

export const LlistAllUsers_Query = gql`
  query Query {
    listAllUsers {
      id
      name
      email
      userName
      role
      active
    }
  }
`;
export const ListAllStaffs_Query = gql`
  query ListAllStaffs {
    listAllStaffs {
      id
      staffId
      staffName
      DOB
      destination
      phoneNumber
      email
      nationalId
      snnitId
      dateJoined
      active
      createdAt
      updatedAt
    }
  }
`;
export const ListAllDepartments = gql`
  query ListAllDepartment {
    listAllDepartment {
      id
      name
    }
  }
`;
export const ListAllClasses = gql`
  query ListAllClasses {
    listAllClasses {
      id
      class_name
      department_id
      staff_id
      department {
        name
        id
      }
    }
  }
`;
export const listAllStudents = gql`
  query listAllStudents {
    listAllStudents {
      id
    }
  }
`;
