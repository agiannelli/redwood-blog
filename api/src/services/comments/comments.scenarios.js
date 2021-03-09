import { comments, createComment } from './comments'

export const standard = defineScenario({
  comment: {
    one: {
      name: 'Jane Doe',
      body: 'I like trees',
      post: {
        create: {
          title: 'Redwood Leaves',
          body: 'The quick brown fox jumped over the lazy dog',
        },
      },
    },

    two: {
      name: 'John Doe',
      body: 'Hug a tree today',
      post: {
        create: {
          title: 'Root Systems',
          body: 'The five boxing wizards jump quickly',
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      title: 'Bark',
      body: "A tree's bark is no worse than its bite",
    },
  },
})

scenario('postOnly', 'creates a new comment', async (scenario) => {
  const comment = await createComment({
    input: {
      name: 'Billy Bob',
      body: 'What is your favorite tree bark?',
      postId: scenario.post.bark.id,
    },
  })
  expect(comment.name).toEqual('Billy Bob')
  expect(comment.body).toEqual('What is your favorite tree bark?')
  expect(comment.postId).toEqual(scenario.post.bark.id)
  expect(comment.createdAt).not.toEqual(null)
})
