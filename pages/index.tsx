import { Card, CardContent, Grid, Typography, Pagination } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import Image from "next/image";

// Defining the structure for the human data
interface Human {
    id: number;
    name: string;
    image: string;
    species: string;
}

// Defining the structure for the component's props.
interface HomeProps {
    humans: Human[];
    totalPages: number;
}

// Main React component that displays the list of human characters.
const Home: React.FC<HomeProps> = ({ humans, totalPages }) => {
    // Hooks for routing and local state management.
    const router = useRouter();
    const [page, setPage] = useState<number>(parseInt(router.query.page as string) || 1);

    // Function to handle pagination changes.
    const handlePageChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        // Fetch potential data for the new page.
        try {
            const res = await fetch(`http://localhost:4000/humans?page=${value}`);
            const data = await res.json();

            // Check if the data is valid before navigating.
            if (res.ok && data.results && data.results.length > 0) {
                setPage(value);
                router.push(`/?page=${value}`);
            } else {
                console.error("Invalid data for page:", value);
            }
        } catch (error) {
            console.error("Failed to fetch data for page:", value, error);
        }
    };

    // Render the human character cards and pagination controls.
    return (
        <div>
            <Grid container spacing={2} key={page}>
                {humans.map((human) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={human.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{human.name}</Typography>
                                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                                    <Image
                                        src={human.image}
                                        alt={human.name}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
        </div>
    );
};

// Function to fetch data server-side before the component is rendered.
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{ props: HomeProps }> {
    const page = context.query.page || 1;
    let data = { results: [], totalPages: 1 };

    // Fetch data from the backend server.
    try {
        const res = await fetch(`http://localhost:4000/humans?page=${page}`);
        data = await res.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }

    // Return the fetched data as props for the component.
    return {
        props: {
            humans: data.results,
            totalPages: data.totalPages
        }
    };
}


export default Home;