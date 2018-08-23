/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Privilege_item$ref = any;
type Resource_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Right_item$ref: FragmentReference;
export type Right_item = {|
  +id: string,
  +privilege: {|
    +$fragmentRefs: Privilege_item$ref
  |},
  +resource: {|
    +$fragmentRefs: Resource_item$ref
  |},
  +$refType: Right_item$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Right_item",
  "type": "Right",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "privilege",
      "storageKey": null,
      "args": null,
      "concreteType": "Privilege",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Privilege_item",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "resource",
      "storageKey": null,
      "args": null,
      "concreteType": "Resource",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Resource_item",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '73d624e276b8f0f4179a1b77feb036a1';
module.exports = node;
