import React from 'react';
import { HomeContent } from '../components/organisms';
import { Layout } from '../components/templates';

export default function Home(): JSX.Element {
    return (
        <Layout>
            <HomeContent />
        </Layout>
    );
}
