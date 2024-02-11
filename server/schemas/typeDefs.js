const typeDefs = `
  type Blog {
    _id: ID
    blogContent: String
    blogAuthor: String
    comments: [Comment]!
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    blog: [Blog]!
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Query {
   blog: [Blog]
   oneBlog(blogId: ID!): Blog
    user: [User]
  
  }
  type Auth {
    token: ID!
    user: User
  }


  # Define which mutations the client is allowed to make
  type Mutation {
    
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBlog(blogContent: String!, blogAuthor: String!): Blog
    addComment(blogId: ID!, commentBody: String!, username: String!): Comment
    removeBlog(blogId: ID!): Blog
    removeComment(blogId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;

