import { fetchPosts } from '@/store/slices/postSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Loader from './Loader';
import noPostFound from "@/assets/illustrations/no_post_found.svg";

function PostList() {

    const dispatch = useDispatch();



    const { data: posts, isLoading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts({
            param1: "id1",
            param2: "id2",
        }));
    }, [dispatch]);


    if (error.status) return <div>{error?.message}</div>
    if (isLoading) return <Loader />

    return (
        <>
            {
                (posts.length === 0 && !isLoading) && <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <img src={noPostFound} className='h-[200px]' />
                    <p className='font-semibold text-xl'>No Posts to show</p>
                </div>
            }
            {
                posts?.map((item, i) => {
                    return (
                        <Card key={i}>
                            <CardHeader>
                                <CardTitle>
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{item.body}</p>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default PostList
