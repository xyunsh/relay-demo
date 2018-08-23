import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import Right from './Right';

type Props = {};

class Rights extends React.Component<Props> {
    render() {        
        return (
            <dl>
                {this.props.items.map((r)=><dd key={r.id}><Right item={r}/></dd>)}
            </dl>
        );
    }
}

export default createFragmentContainer(
    Rights,
    graphql`
        fragment Rights_items on Right @relay(plural:true) {
            id
            ...Right_item
        }
    `
);