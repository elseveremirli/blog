import Head from 'next/head'
import React from 'react'
import AddPost from '../../components/AddPost'
type Props = {}

const AddPosts = (props: Props) => {
  return (
    <div>
        <Head>
        <title>Add Post</title>
        </Head>
        <main>
            <AddPost/>
        </main>
    </div>
  )
}

export default AddPosts