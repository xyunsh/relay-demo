import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import Privilege from './Privilege';
import Resource from './Resource';

type Props = {};

class Right extends React.Component<Props> {
    render() {
        const { item:{privilege, resource} } = this.props;

        return (
            <div><Privilege item={privilege}/><Resource item={resource}/></div>
        );
    }
}

export default createFragmentContainer(
    Right,
    graphql`
        fragment Right_item on Right {
            id,
            privilege {
                ...Privilege_item
            },
            resource {
                ...Resource_item
            }
        }
    `
);