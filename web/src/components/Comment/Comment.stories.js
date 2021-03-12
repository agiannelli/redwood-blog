import Comment from './Comment'

const COMMENT = {
  name: 'Rob Cameron',
  body: 'This is the first comment!',
  createdAt: '2020-01-01T12:34:56Z',
}

export const defaultView = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
        }}
      />
    </div>
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: ['moderator'],
  })

  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
