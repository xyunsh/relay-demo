import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

type Props = {};

class Resource extends React.Component<Props> {
    render() {
        const { item:{name, slug} } = this.props;

        return (
            <span>{name}</span>
        );
    }
}


export default createFragmentContainer(
    Resource,
    graphql`
        fragment Resource_item on Resource {
            id,
            name,
            slug
        }
    `
);