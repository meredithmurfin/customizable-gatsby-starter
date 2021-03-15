import React from 'react';
import { HomeContent } from '../components/organisms';
import { Layout } from '../components/templates';

function Home(): JSX.Element {
    return (
        <Layout>
            <HomeContent />
        </Layout>
    );
}

export default Home;
