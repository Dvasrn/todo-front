// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodoMutation?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationAddTodoMutationArgs = {
  input?: InputMaybe<AddTodoInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllTodo?: Maybe<Array<Maybe<Todo>>>;
};

export type Todo = {
  __typename?: 'Todo';
  status?: Maybe<Scalars['Boolean']['output']>;
  todoName?: Maybe<Scalars['String']['output']>;
  todoTeam?: Maybe<Scalars['String']['output']>;
};

export type AddTodoInput = {
  status?: InputMaybe<Scalars['Boolean']['input']>;
  todoName?: InputMaybe<Scalars['String']['input']>;
  todoTeam?: InputMaybe<Scalars['String']['input']>;
};

export type AddTodoMutationMutationVariables = Exact<{
  input?: InputMaybe<AddTodoInput>;
}>;


export type AddTodoMutationMutation = { __typename?: 'Mutation', addTodoMutation?: Array<{ __typename?: 'Todo', todoName?: string | null, todoTeam?: string | null } | null> | null };

export type GetAllTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodoQuery = { __typename?: 'Query', getAllTodo?: Array<{ __typename?: 'Todo', todoName?: string | null, todoTeam?: string | null } | null> | null };


export const AddTodoMutationDocument = gql`
    mutation addTodoMutation($input: addTodoInput) {
  addTodoMutation(input: $input) {
    todoName
    todoTeam
  }
}
    `;
export type AddTodoMutationMutationFn = Apollo.MutationFunction<AddTodoMutationMutation, AddTodoMutationMutationVariables>;
export type AddTodoMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddTodoMutationMutation, AddTodoMutationMutationVariables>
    } & TChildProps;
export function withAddTodoMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddTodoMutationMutation,
  AddTodoMutationMutationVariables,
  AddTodoMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddTodoMutationMutation, AddTodoMutationMutationVariables, AddTodoMutationProps<TChildProps, TDataName>>(AddTodoMutationDocument, {
      alias: 'addTodoMutation',
      ...operationOptions
    });
};

/**
 * __useAddTodoMutationMutation__
 *
 * To run a mutation, you first call `useAddTodoMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutationMutation, { data, loading, error }] = useAddTodoMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTodoMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutationMutation, AddTodoMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutationMutation, AddTodoMutationMutationVariables>(AddTodoMutationDocument, options);
      }
export type AddTodoMutationMutationHookResult = ReturnType<typeof useAddTodoMutationMutation>;
export type AddTodoMutationMutationResult = Apollo.MutationResult<AddTodoMutationMutation>;
export type AddTodoMutationMutationOptions = Apollo.BaseMutationOptions<AddTodoMutationMutation, AddTodoMutationMutationVariables>;
export const GetAllTodoDocument = gql`
    query getAllTodo {
  getAllTodo {
    todoName
    todoTeam
  }
}
    `;
export type GetAllTodoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTodoQuery, GetAllTodoQueryVariables>
    } & TChildProps;
export function withGetAllTodo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTodoQuery,
  GetAllTodoQueryVariables,
  GetAllTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTodoQuery, GetAllTodoQueryVariables, GetAllTodoProps<TChildProps, TDataName>>(GetAllTodoDocument, {
      alias: 'getAllTodo',
      ...operationOptions
    });
};

/**
 * __useGetAllTodoQuery__
 *
 * To run a query within a React component, call `useGetAllTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
      }
export function useGetAllTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
        }
export function useGetAllTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
        }
export type GetAllTodoQueryHookResult = ReturnType<typeof useGetAllTodoQuery>;
export type GetAllTodoLazyQueryHookResult = ReturnType<typeof useGetAllTodoLazyQuery>;
export type GetAllTodoSuspenseQueryHookResult = ReturnType<typeof useGetAllTodoSuspenseQuery>;
export type GetAllTodoQueryResult = Apollo.QueryResult<GetAllTodoQuery, GetAllTodoQueryVariables>;