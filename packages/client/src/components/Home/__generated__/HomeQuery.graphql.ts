/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
  readonly getStreamerCount: number;
};
export type HomeQuery = {
  readonly response: HomeQueryResponse;
  readonly variables: HomeQueryVariables;
};

/*
query HomeQuery {
  getStreamerCount
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'getStreamerCount',
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
      cacheID: '45f4f039da303ecb27a82ddf474f1ff0',
      id: null,
      metadata: {},
      name: 'HomeQuery',
      operationKind: 'query',
      text: 'query HomeQuery {\n  getStreamerCount\n}\n'
    }
  };
})();
(node as any).hash = '66045e4c052bb48a46178f2bb891187a';
export default node;
