/**
 * @flow
 * @relayHash cf23e5ffde13b8556ce4a44efcdf82c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Rights_items$ref = any;
export type appQueryVariables = {||};
export type appQueryResponse = {|
  +roles: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +rights: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Rights_items$ref
    |}>,
  |}>
|};
export type appQuery = {|
  variables: appQueryVariables,
  response: appQueryResponse,
|};
*/


/*
query appQuery {
  roles {
    id
    name
    rights {
      ...Rights_items
      id
    }
  }
}

fragment Rights_items on Right {
  id
  ...Right_item
}

fragment Right_item on Right {
  id
  privilege {
    ...Privilege_item
    id
  }
  resource {
    ...Resource_item
    id
  }
}

fragment Privilege_item on Privilege {
  id
  name
  slug
}

fragment Resource_item on Resource {
  id
  name
  slug
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  v0,
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "slug",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery {\n  roles {\n    id\n    name\n    rights {\n      ...Rights_items\n      id\n    }\n  }\n}\n\nfragment Rights_items on Right {\n  id\n  ...Right_item\n}\n\nfragment Right_item on Right {\n  id\n  privilege {\n    ...Privilege_item\n    id\n  }\n  resource {\n    ...Resource_item\n    id\n  }\n}\n\nfragment Privilege_item on Privilege {\n  id\n  name\n  slug\n}\n\nfragment Resource_item on Resource {\n  id\n  name\n  slug\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "roles",
        "storageKey": null,
        "args": null,
        "concreteType": "Role",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rights",
            "storageKey": null,
            "args": null,
            "concreteType": "Right",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Rights_items",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "roles",
        "storageKey": null,
        "args": null,
        "concreteType": "Role",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rights",
            "storageKey": null,
            "args": null,
            "concreteType": "Right",
            "plural": true,
            "selections": [
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "privilege",
                "storageKey": null,
                "args": null,
                "concreteType": "Privilege",
                "plural": false,
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "resource",
                "storageKey": null,
                "args": null,
                "concreteType": "Resource",
                "plural": false,
                "selections": v2
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc1bfcc4a69ecbf001d52211e5ccaf30';
module.exports = node;
