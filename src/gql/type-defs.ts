import { gql } from "apollo-server-express"

export const typeDefs = gql`
type Person {
    name: String!
    dob: String!
    job: [Workplace!]! @relationship(type: "WORKS_FOR", direction: OUT)
}

type Workplace {
    name: String!
    employees: [Person!]! @relationship(type: "EMPLOYEE_OF", direction: OUT)
}`