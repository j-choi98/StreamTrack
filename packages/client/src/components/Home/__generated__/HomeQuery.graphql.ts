/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
  readonly getTotalStreamerCount: number;
  readonly getTotalViewerCount: number;
};
export type HomeQuery = {
  readonly response: HomeQueryResponse;
  readonly variables: HomeQueryVariables;
};

/*
query HomeQuery {
  getTotalStreamerCount
  getTotalViewerCount
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'getTotalStreamerCount',
      storageKey: null
    },
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'getTotalViewerCount',
      storageKey: null
    }
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'HomeQuery',
      selections: v0 /*: any*/,
      type: 'Query',
      abstractKey: null
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'HomeQuery',
      selections: v0 /*: any*/
    },
    params: {
      cacheID: '2ddaa6371ad311c4cfec631cb0f97c57',
      id: null,
      metadata: {},
      name: 'HomeQuery',
      operationKind: 'query',
      text:
        'query HomeQuery {\n  getTotalStreamerCount\n  getTotalViewerCount\n}\n'
    }
  };
})();
(node as any).hash = 'd0d3582e351a1e44127ad93c58a8fa58';
export default node;
