import { TableNames } from "../eTableNames";
import { Knex } from "knex";
import { v4 as uuid } from "uuid";
import crypto from "crypto";

const data = {
  roles: {
    manager: uuid(),
    tech_lead: uuid(),
    front_end: uuid(),
    back_end: uuid(),
  },
  users: {
    ultimatemercer: uuid(),
    sashawatson: uuid(),
    alexjmercer: uuid(),
    emmagrey: uuid(),
  },
  organizations: {
    blklight: uuid(),
    ultimates: uuid(),
  },
  projects: {
    manofthematch: uuid(),
    matchmaker: uuid(),
  },
  teams: {
    devcorporation: uuid(),
  },
  tasks: [uuid(), uuid(), uuid(), uuid(), uuid()],
  releases: [
    {
      id: uuid(),
    },
  ],
  comments: [uuid(), uuid()],
};

const hash_token = crypto.randomBytes(64).toString("base64");

const executeRolesTrx = async (trx: Knex) => {
  await trx(TableNames.ROLES).del();
  await trx(TableNames.ROLES).insert([
    { id: data.roles.manager, title: "Manager" },
    { id: data.roles.tech_lead, title: "Tech Lead" },
    {
      id: data.roles.front_end,
      title: "Front-end Developer",
    },
    { id: data.roles.back_end, title: "Back-end Developer" },
  ]);
};

const executeUsersTrx = async (trx: Knex) => {
  await trx(TableNames.USERS).del();
  await trx(TableNames.USERS).insert([
    {
      id: data.users.ultimatemercer,
      name: "Ultimate Mercer",
      username: "UltimateMercer",
      email: "ultimatemercer.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/h4BIIOc.jpg",
      description: "Blklight Creator",
      role_id: data.roles.manager,
    },
    {
      id: data.users.sashawatson,
      name: "Sasha Watson",
      username: "SashaWatson",
      email: "sashawatson.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/qOEajoe.jpg",
      description: "Blklight Tech Lead",
      role_id: data.roles.tech_lead,
    },
    {
      id: data.users.alexjmercer,
      name: "Alex J. Mercer",
      username: "AlexJMercer",
      email: "alexjmercer.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/VTAHBAZ.jpg",
      description: "Blklight Back-end Developer",
      role_id: data.roles.back_end,
    },
    {
      id: data.users.emmagrey,
      name: "Emma Grey",
      username: "EmmaGrey",
      email: "emmagrey.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/2XLydEm.jpg",
      description: "Blklight Front-end Developer",
      role_id: data.roles.front_end,
    },
  ]);
};

const executeOrganizationsTrx = async (trx: Knex) => {
  await trx(TableNames.ORGANIZATIONS).del();
  await trx(TableNames.ORGANIZATIONS).insert([
    {
      id: data.organizations.blklight,
      name: "Blklight",
      logo: "https://i.imgur.com/AOOqa0N.jpg",
      description: "Welcome to the Blklight!",
      manager_id: data.users.ultimatemercer,
    },
    {
      id: data.organizations.ultimates,
      name: "Ultimates",
      logo: "https://i.imgur.com/AOOqa0N.jpg",
      description: "Welcome to the Ultimates!",
      manager_id: data.users.sashawatson,
    },
  ]);
};

const executeProjectsTrx = async (trx: Knex) => {
  await trx(TableNames.PROJECTS).del();
  await trx(TableNames.PROJECTS).insert([
    {
      id: data.projects.manofthematch,
      name: "#ManOfTheMatch",
      description: "Project focused on #ManOfTheMatch ecosystem",
      logo: "https://i.imgur.com/dYMBVIA.jpg",
      leader_id: data.users.ultimatemercer,
      organization_id: data.organizations.blklight,
    },
    {
      id: data.projects.matchmaker,
      name: "Masterduel Matchmaker",
      description: "Project focused on Masterduel Matchmaker",
      logo: "https://i.imgur.com/dYMBVIA.jpg",
      leader_id: data.users.sashawatson,
      organization_id: data.organizations.ultimates,
    },
  ]);
};

const executeTeamsTrx = async (trx: Knex) => {
  await trx(TableNames.TEAMS).del();
  await trx(TableNames.TEAMS).insert([
    {
      id: data.teams.devcorporation,
      name: "Dev Corporation",
      leader_id: data.users.ultimatemercer,
      organization_id: data.organizations.blklight,
    },
  ]);
};

const executeTeamMembersTrx = async (trx: Knex) => {
  await trx(TableNames.TEAM_MEMBERS).del();
  await trx(TableNames.TEAM_MEMBERS).insert([
    {
      team_id: data.teams.devcorporation,
      member_id: data.users.emmagrey,
    },
    {
      team_id: data.teams.devcorporation,
      member_id: data.users.sashawatson,
    },
  ]);
};

const executeTasksTrx = async (trx: Knex) => {
  await trx(TableNames.TASKS).del();
  await trx(TableNames.TASKS).insert([
    {
      id: data.tasks[0],
      title: "Create an API",
      description:
        "Tenere tundit, ora causa milite pretiumque adpellare ad dubio. Voce pericli ibat; iamque animos, eras Nyseus bello nimia faciem ab guttur pictae facta rubescere comes.",
      label: "feature",
      status: "backlog",
      priority: "high",
      project_id: data.projects.manofthematch,
    },
    {
      id: data.tasks[1],
      title: "Solve Problems",
      description:
        "Orbi noctis, vultu coruscis, tela formae talia nefas! Vertar munus ego pacem, est inimica, iacentes, ad socios ab sunt aut terga clamore!",
      label: "bug",
      status: "todo",
      priority: "heavy high",
      project_id: data.projects.manofthematch,
    },
    {
      id: data.tasks[2],
      title: "Design Dashboard",
      description:
        "Gradus sed minus Combe ut ignibus numina inde leones, tenet, iter silex lucoque crimen. Cum totidem tristes, ferebat ulmi mittor umentes, fieri vultus mox vos.",
      label: "design",
      status: "in progress",
      priority: "medium",
      project_id: data.projects.manofthematch,
    },
    {
      id: data.tasks[3],
      title: "Publish Documentation",
      description:
        "Talia heros in petit annis lacrimas, egerere, amor habet me. Patuit iuncique auspicio enumerare salutem namque caelitibus, at ecce sed deos pericla captus cur soror vos.",
      label: "documentation",
      status: "done",
      priority: "low",
      project_id: data.projects.manofthematch,
    },
    {
      id: data.tasks[4],
      title: "Analyse a new solution",
      description:
        "Spatio in, fuit non litora infelix fleverunt partim, non Achivi elementa maerentes quoque tendentes!",
      label: "enhancement",
      status: "todo",
      priority: "heavy low",
      project_id: data.projects.matchmaker,
    },
  ]);
};

const executeReleasesTrx = async (trx: Knex) => {
  await trx(TableNames.RELEASES).del();
  await trx(TableNames.RELEASES).insert([
    {
      id: data.releases[0].id,
      name: "1.0.0",
      project_id: data.projects.manofthematch,
    },
  ]);
};

const executeTasksRelease = async (trx: Knex) => {
  await trx(TableNames.TASKS_RELEASE).del();
  await trx(TableNames.TASKS_RELEASE).insert([
    {
      task_id: data.tasks[0],
      release_id: data.releases[0].id,
    },
    {
      task_id: data.tasks[1],
      release_id: data.releases[0].id,
    },
    {
      task_id: data.tasks[2],
      release_id: data.releases[0].id,
    },
    {
      task_id: data.tasks[3],
      release_id: data.releases[0].id,
    },
  ]);
};

const executeCommentsTrx = async (trx: Knex) => {
  await trx(TableNames.COMMENTS).del();
  await trx(TableNames.COMMENTS).insert([
    {
      id: data.comments[0],
      content:
        "Lorem markdownum equos praecipitem ignavi. Nam notam hunc Oleniae vesper, in futuri et sitiemus, est inque mensas inplet.",
      user_id: data.users.ultimatemercer,
      task_id: data.tasks[0],
    },
    {
      id: data.comments[1],
      content:
        "Invita vestigia, in pennas ratem: sed et infectis decipere a. Clausit sub quid mediis tenuit, medendi gemitu purpureum vana una pius tradiderat stabat omnia pater conplecti.",
      user_id: data.users.sashawatson,
      task_id: data.tasks[0],
    },
  ]);
};

export async function seed(knex: Knex): Promise<void> {
  try {
    await knex.transaction(async (trx) => {
      await executeRolesTrx(trx);
      await executeUsersTrx(trx);
      await executeOrganizationsTrx(trx);
      await executeProjectsTrx(trx);
      await executeTeamsTrx(trx);
      await executeTeamMembersTrx(trx);
      await executeTasksTrx(trx);
      await executeReleasesTrx(trx);
      await executeTasksRelease(trx);
      await executeCommentsTrx(trx);
    });
  } catch (error) {
    console.error(error);
  }
}
