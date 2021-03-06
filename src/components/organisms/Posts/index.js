import React, { Component } from 'react'
import { Flex, Heading } from 'components/atoms'
import { Post } from 'components/molecules'
import styles from './styles.module.scss'
import postFeed from './post_feed'

class Posts extends Component {
	render() {
		return (
			<div className={styles.postFeed} id="posts">
				<Flex justify="space-between" flexWrap="wrap" className={styles.postDirection}>
					{postFeed.map(post => {
						return <Post key={post.id} post={post} />
					})}
				</Flex>
			</div>
		)
	}
}

export default Posts
