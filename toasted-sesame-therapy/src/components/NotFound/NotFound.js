import React from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';
import NotFound from '../../assets/NotFound.jpg';
const NotFoundPage = () => {
    return (
        <Box textAlign="center" mt="50px">
            <Image src={NotFound} alt="404" paddingBottom="2rem"/>
            <Text fontSize="24px" color="purple.800">
                Whoops! Looks like you've taken a detour into the land of lost sesame seeds.
            </Text>
            <Text fontSize="24px" color="purple.800">
                This page is as elusive as a single sesame seed lost in a bustling Korean market.
            </Text>
            <Text fontSize="24px" color="purple.800">
                Let's navigate back to the main path, full of familiar sights and scents.
            </Text>
            <Link href="/" fontSize="20px" color="purple.800" textDecoration="none">
                Click here to return to the comfort of home.
            </Link>
        </Box>
    );
}

export default NotFoundPage;
