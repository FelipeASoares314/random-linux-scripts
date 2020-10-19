const { homeDir } = require('../../../helpers/osUser')
const { read } = require('../../../helpers/files')
const { exists } = require('../../../helpers/directories')

const basePath = process.env.BRANCH_MANAGER_HOME ||
  `${homeDir()}/.branch_manager`

const getCommitMessage = _ => process.argv[1]

async function main () {
  const issueFile = `${basePath}/current_issue.txt`

  if (!await exists(issueFile)) {
    console.log(getCommitMessage())
    process.exit(0)
  }

  const currentIssue = await read(issueFile)

  console.log(`[${currentIssue}] ${getCommitMessage()}`)
  process.exit(0)
}

main()
