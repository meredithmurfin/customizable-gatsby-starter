import React from 'react';
import { ErrorPageContent } from '../components/organisms';
import { Layout } from '../components/templates';

function Error(): JSX.Element {
    return (
        <Layout>
            <ErrorPageContent />
        </Layout>
    );
}

export default Error;
