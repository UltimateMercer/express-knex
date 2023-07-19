import { TableNames } from "../eTableNames";
import { Knex } from "knex";
import { v4 as uuid } from "uuid";
import crypto from "crypto";

export const roles = {
  id: {
    manager: uuid(),
    tech_lead: uuid(),
    front_end: uuid(),
    back_end: uuid(),
    merc: uuid(),
    rockerboy: uuid(),
    engineer: uuid(),
    saiyan: uuid(),
    avenger: uuid(),
    corp: uuid(),
    fighter: uuid(),
  },
};

const rolesOrganization = {
  id: {
    management: uuid(),
    member: uuid(),
  },
};

export const users = {
  id: {
    ultimatemercer: uuid(),
    sashawatson: uuid(),
    alexjmercer: uuid(),
    emmagrey: uuid(),
    deadpool: uuid(),
    johnnysilverhand: uuid(),
    isaacclarke: uuid(),
    goku: uuid(),
    rocketracoon: uuid(),
    v: uuid(),
    captain: uuid(),
    jiren: uuid(),
  },
};

export const organizations = {
  id: {
    blklight: uuid(),
    ultimates: uuid(),
  },
};

export const projects = {
  id: {
    manofthematch: uuid(),
    matchmaker: uuid(),
  },
};

export const teams = {
  id: {
    devcorporation: uuid(),
  },
};

export const tasks = [uuid(), uuid(), uuid(), uuid(), uuid()];

export const releases = [
  {
    id: uuid(),
  },
];

export const comments = [uuid(), uuid()];

const hash_token = crypto.randomBytes(64).toString("base64");

const executeRolesTrx = async (trx: Knex) => {
  await trx(TableNames.ROLES).del();
  await trx(TableNames.ROLES).insert([
    // { id: roles.id., title: "" },
    { id: roles.id.manager, title: "Manager" },
    { id: roles.id.tech_lead, title: "Tech Lead" },
    {
      id: roles.id.front_end,
      title: "Front-end Developer",
    },
    { id: roles.id.back_end, title: "Back-end Developer" },
    { id: roles.id.merc, title: "Merc" },
    { id: roles.id.rockerboy, title: "Rockerboy" },
    { id: roles.id.engineer, title: "Engineer" },
    { id: roles.id.saiyan, title: "Saiyan" },
    { id: roles.id.avenger, title: "Avenger" },
    { id: roles.id.corp, title: "Corp" },
    { id: roles.id.fighter, title: "Fighter" },
  ]);
};

const executeRolesOrganizationTrx = async (trx: Knex) => {
  await trx(TableNames.ROLES_ORGANIZATION).del();
  await trx(TableNames.ROLES_ORGANIZATION).insert([
    // { id: roles.id., title: "" },
    { id: rolesOrganization.id.management, title: "Management" },
    { id: rolesOrganization.id.member, title: "Member" },
  ]);
};

const executeUsersTrx = async (trx: Knex) => {
  await trx(TableNames.USERS).del();
  await trx(TableNames.USERS).insert([
    {
      id: users.id.ultimatemercer,
      name: "Ultimate Mercer",
      username: "UltimateMercer",
      email: "ultimatemercer.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/h4BIIOc.jpg",
      description: "Blklight Creator",
      role_id: roles.id.manager,
    },
    {
      id: users.id.sashawatson,
      name: "Sasha Watson",
      username: "SashaWatson",
      email: "sashawatson.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/qOEajoe.jpg",
      description: "Blklight Tech Lead",
      role_id: roles.id.tech_lead,
    },
    {
      id: users.id.alexjmercer,
      name: "Alex J. Mercer",
      username: "AlexJMercer",
      email: "alexjmercer.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/VTAHBAZ.jpg",
      description: "Blklight Back-end Developer",
      role_id: roles.id.back_end,
    },
    {
      id: users.id.emmagrey,
      name: "Emma Grey",
      username: "EmmaGrey",
      email: "emmagrey.blklight@gmail.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/2XLydEm.jpg",
      description: "Blklight Front-end Developer",
      role_id: roles.id.front_end,
    },
    {
      id: users.id.deadpool,
      name: "Deadpool",
      username: "imnotryanreynolds",
      email: "deadpool@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/8EK96Ww.jpg",
      description: "Merc with a mouth",
      role_id: roles.id.merc,
    },
    {
      id: users.id.johnnysilverhand,
      name: "Johnny Silverhand",
      username: "samurai",
      email: "samurai@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/m18aTdY.jpg",
      description: "Wake the fuck up samurai, we have a city to burn!",
      role_id: roles.id.rockerboy,
    },
    {
      id: users.id.isaacclarke,
      name: "Isaac Clarke",
      username: "isaacclarke",
      email: "isaacclarke@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/To4RzjC.jpg",
      description: "Engineer at USG Ishimura",
      role_id: roles.id.engineer,
    },
    {
      id: users.id.goku,
      name: "Son Goku",
      username: "songoku",
      email: "songoku@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/ht0XhCz.jpg",
      description: "Hey, it's me Goku!!",
      role_id: roles.id.saiyan,
    },
    {
      id: users.id.rocketracoon,
      name: "Rocket Racoon",
      username: "rocket",
      email: "rocket@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/12oYeUp.jpg",
      description: "I need that arm!!!",
      role_id: roles.id.avenger,
    },
    {
      id: users.id.v,
      name: "V",
      username: "v",
      email: "valerie@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/ZTcUbBn.jpg",
      description: "Night City Legend",
      role_id: roles.id.corp,
    },
    {
      id: users.id.captain,
      name: "Steve Rodgers",
      username: "CaptainAmerica",
      email: "rodgers@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/PBQLV0i.jpg",
      description: "Avengers Assemble!!",
      role_id: roles.id.avenger,
    },
    {
      id: users.id.jiren,
      name: "Jiren",
      username: "Jiren",
      email: "jiren@email.com",
      password: crypto
        .pbkdf2Sync("senha5", hash_token, 1000, 64, "sha512")
        .toString("base64"),
      hash_token: hash_token,
      avatar: "https://i.imgur.com/Uu6hUyL.jpg",
      description: "It's over!!",
      role_id: roles.id.fighter,
    },
  ]);
};

const executeOrganizationsTrx = async (trx: Knex) => {
  await trx(TableNames.ORGANIZATIONS).del();
  await trx(TableNames.ORGANIZATIONS).insert([
    {
      id: organizations.id.blklight,
      name: "Blklight",
      orgname: "Blklight",
      email: "blklight@email.com",
      logo: "https://i.imgur.com/AOOqa0N.jpg",
      description: "Welcome to the Blklight!",
      invitation_code: "",
      user_manager_id: users.id.ultimatemercer,
    },
    {
      id: organizations.id.ultimates,
      name: "Ultimates",
      orgname: "Ultimates",
      email: "ultimate@email.com",
      logo: "https://i.imgur.com/AOOqa0N.jpg",
      description: "Welcome to the Ultimates!",
      invitation_code: "",
      user_manager_id: users.id.sashawatson,
    },
  ]);
};

const executeOrganizationMember = async (trx: Knex) => {
  await trx(TableNames.ORGANIZATION_MEMBERS).del();
  await trx(TableNames.ORGANIZATION_MEMBERS).insert([
    {
      organization_id: organizations.id.blklight,
      roles_organization_id: rolesOrganization.id.management,
      user_id: users.id.emmagrey,
    },
    {
      organization_id: organizations.id.blklight,
      roles_organization_id: rolesOrganization.id.member,
      user_id: users.id.alexjmercer,
    },
  ]);
};

const executeProjectsTrx = async (trx: Knex) => {
  await trx(TableNames.PROJECTS).del();
  await trx(TableNames.PROJECTS).insert([
    {
      id: projects.id.manofthematch,
      name: "#ManOfTheMatch",
      description: "Project focused on #ManOfTheMatch ecosystem",
      logo: "https://i.imgur.com/dYMBVIA.jpg",
      leader_id: users.id.ultimatemercer,
      organization_id: organizations.id.blklight,
    },
    {
      id: projects.id.matchmaker,
      name: "Masterduel Matchmaker",
      description: "Project focused on Masterduel Matchmaker",
      logo: "https://i.imgur.com/dYMBVIA.jpg",
      leader_id: users.id.sashawatson,
      organization_id: organizations.id.ultimates,
    },
  ]);
};

const executeTeamsTrx = async (trx: Knex) => {
  await trx(TableNames.TEAMS).del();
  await trx(TableNames.TEAMS).insert([
    {
      id: teams.id.devcorporation,
      name: "Dev Corporation",
      leader_id: users.id.ultimatemercer,
      organization_id: organizations.id.blklight,
    },
  ]);
};

const executeTeamMembersTrx = async (trx: Knex) => {
  await trx(TableNames.TEAM_MEMBERS).del();
  await trx(TableNames.TEAM_MEMBERS).insert([
    {
      team_id: teams.id.devcorporation,
      member_id: users.id.emmagrey,
    },
    {
      team_id: teams.id.devcorporation,
      member_id: users.id.sashawatson,
    },
  ]);
};

const executeTasksTrx = async (trx: Knex) => {
  await trx(TableNames.TASKS).del();
  await trx(TableNames.TASKS).insert([
    {
      id: tasks[0],
      title: "Create an API",
      description:
        "Tenere tundit, ora causa milite pretiumque adpellare ad dubio. Voce pericli ibat; iamque animos, eras Nyseus bello nimia faciem ab guttur pictae facta rubescere comes.",
      label: "feature",
      status: "backlog",
      priority: "high",
      project_id: projects.id.manofthematch,
    },
    {
      id: tasks[1],
      title: "Solve Problems",
      description:
        "Orbi noctis, vultu coruscis, tela formae talia nefas! Vertar munus ego pacem, est inimica, iacentes, ad socios ab sunt aut terga clamore!",
      label: "bug",
      status: "todo",
      priority: "heavy high",
      project_id: projects.id.manofthematch,
    },
    {
      id: tasks[2],
      title: "Design Dashboard",
      description:
        "Gradus sed minus Combe ut ignibus numina inde leones, tenet, iter silex lucoque crimen. Cum totidem tristes, ferebat ulmi mittor umentes, fieri vultus mox vos.",
      label: "design",
      status: "in progress",
      priority: "medium",
      project_id: projects.id.manofthematch,
    },
    {
      id: tasks[3],
      title: "Publish Documentation",
      description:
        "Talia heros in petit annis lacrimas, egerere, amor habet me. Patuit iuncique auspicio enumerare salutem namque caelitibus, at ecce sed deos pericla captus cur soror vos.",
      label: "documentation",
      status: "done",
      priority: "low",
      project_id: projects.id.manofthematch,
    },
    {
      id: tasks[4],
      title: "Analyse a new solution",
      description:
        "Spatio in, fuit non litora infelix fleverunt partim, non Achivi elementa maerentes quoque tendentes!",
      label: "enhancement",
      status: "todo",
      priority: "heavy low",
      project_id: projects.id.matchmaker,
    },
  ]);
};

const executeReleasesTrx = async (trx: Knex) => {
  await trx(TableNames.RELEASES).del();
  await trx(TableNames.RELEASES).insert([
    {
      id: releases[0].id,
      name: "1.0.0",
      project_id: projects.id.manofthematch,
    },
  ]);
};

const executeTasksRelease = async (trx: Knex) => {
  await trx(TableNames.TASKS_RELEASE).del();
  await trx(TableNames.TASKS_RELEASE).insert([
    {
      task_id: tasks[0],
      release_id: releases[0].id,
    },
    {
      task_id: tasks[1],
      release_id: releases[0].id,
    },
    {
      task_id: tasks[2],
      release_id: releases[0].id,
    },
    {
      task_id: tasks[3],
      release_id: releases[0].id,
    },
  ]);
};

const executeCommentsTrx = async (trx: Knex) => {
  await trx(TableNames.COMMENTS).del();
  await trx(TableNames.COMMENTS).insert([
    {
      id: comments[0],
      content:
        "Lorem markdownum equos praecipitem ignavi. Nam notam hunc Oleniae vesper, in futuri et sitiemus, est inque mensas inplet.",
      user_id: users.id.ultimatemercer,
      task_id: tasks[0],
    },
    {
      id: comments[1],
      content:
        "Invita vestigia, in pennas ratem: sed et infectis decipere a. Clausit sub quid mediis tenuit, medendi gemitu purpureum vana una pius tradiderat stabat omnia pater conplecti.",
      user_id: users.id.sashawatson,
      task_id: tasks[0],
    },
  ]);
};

export async function seed(knex: Knex): Promise<void> {
  try {
    await knex.transaction(async (trx) => {
      await executeRolesTrx(trx);
      await executeRolesOrganizationTrx(trx);
      await executeUsersTrx(trx);
      await executeOrganizationsTrx(trx);
      await executeOrganizationMember(trx);
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
