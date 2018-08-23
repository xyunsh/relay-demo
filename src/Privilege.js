import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';


type Props = {};

class Privilege extends React.Component<Props> {
    render() {
        const { item:{name, slug} } = this.props;

        return (
            <span>{name}</span>
        );
    }
}

export default createFragmentContainer(
    Privilege,
    graphql`
        fragment Privilege_item on Privilege {
            id,
            name,
            slug
        }
    `
);