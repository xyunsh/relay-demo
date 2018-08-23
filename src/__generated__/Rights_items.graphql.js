/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Right_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Rights_items$ref: FragmentReference;
export type Rights_items = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Right_item$ref,
  +$refType: Rights_items$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Rights_items",
  "type": "Right",
  "metadata": {
    "plural": true
  },
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
      "kind": "FragmentSpread",
      "name": "Right_item",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7566094888231b26cb6e35225219bc1d';
module.exports = node;
