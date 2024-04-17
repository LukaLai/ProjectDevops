# Projet DevOps

## Description du projet

Ceci est un projet de DevOps mis en place et maintenu par Luka LAI et Sébastien LAMARD.
L'objectif est notamment d'étudier la mise en place d'une intégration et d'un déploiement continu.
Dans ce but, nous avons opté pour le faire de clôner une simple template Next.js, afin de pouvoir la déployer aisément sur Vercel.

Il s'agit d'onc d'une app essentiellement Front-End utilisant le framework Next.js, et déployée statiquement grâce à Vercel sur l'URL suivant :
https://project-devops.vercel.app
Le projet est hébergé sur le compte Vercel de Luka.

## Workflow

### Github

Afin de garder de nos travaux et mieux nous organiser, nous utilisons des Issues, sur Github, en guise de TO-DO List.
Pour chaque issue traiter, une à plusieurs Pull Requests peuvent être ouvertes.
Chaque Pull Request contient dans sa description une mention de l'Issue à laquelle elle fait référence afin d'améliorer la traçabilité.
Lors du merge d'une Pull Request, les commits sont stashed, de manière à garder un arbre propre.

Les tags et releases sont gérés depuis Github également.

Nous avons fait le choix de ne pas utiliser de Milestone, ceci étant un projet relativement minime et n'ayant pas de réelle limite de temps pour chaque MEP et fonctionnalité.

### Branches

Chaque nom de branche commence par un 'type', faisant partie de la liste des types de commits donnés par commitizen, à savoir :
- fix: correctif apporté suite à un bug
- feat: nouvelle fonctionnalité
- docs: documentation
- style: changements concernant les normes de code, sans affecter son fonctionnement
- refactor: tout changement qui n'est ni un correctif, ni une nouvelle fonctionnalité
- perf: optimisation
- test: rédaction de tests
- build: changement dans le build de l'application ou dans ses dépendances
- ci: changements dans l'intégration continue

Ce préfixe est suivi d'un `/`, suivi par le scope concerné par les changements ou, de manière plus générale, par ce que les changements sont supposés effectuer.
Par exemple, pour une nouvelle feature sur le monitoring vercel, nous aurons quelque chose comme `feat/vercel-monitoring`.

Cela permet de mieux se repérer et de connaître directement l'objectif d'une branche, et par extension celui de sa Pull Request.

Chaque branche est créée directement depuis la branche main, et sera directement fusionnée dessus une fois la Pull Request validée.
Ceci étant un projet d'envergure minime, nous avons pris le parti de garder un workflow simple, afin de faciliter le développement.

### Commits

Chaque commit respecte les conventions de commitizen.
Ils commencent tous par le type de changements apportés, parmis les types énumérés précédemment.
Suite à ce prefixe vient la scope, entre parenthèses, qui constitue, entre autres, les fichiers impactés, suivi de deux points.
Enfin vient le titre du commit, décrivant rapidement les changements apportés.

Si besoin, une description plus poussée est donnée, pour décrire plus en détail la raison du commit et les changements apportés.
Dans tous les cas, la dernière chose que contient la description du commit est le numéro de l'issue concernée, précédé par un `#`.

## CI/CD

L'intégration et le déploiement continus (CI/CD) constitue une partie importante du projet et des changements effectués.
Nous comptons actuellement 3 jobs différents dans le dossier .github/workflows, chacun contenu dans un fichier yml différent, lançant une action Github différente:
- lint.yml prend en charge le linter, eslint, en utilisant le script `npm lint`. Il est chargé de vérifier la bonne tenue du code de l'application. Il est lancé à chaque push sur une Pull Request ou sur la branche main.
- test.yml prend en charge les tests, gérés par jest et contenus dans le répertoire `__tests__`. Chaque test est arrangé selon l'arborescence du dossier `src/app`. Il est lancé à chaque push sur une Pull Request ou sur la branche main.
- vercel.yml prend en charge le déploiement de l'application du Vercel. Cette action est lancée uniquement lors d'un push ou d'un merge sur la branche main.

Le déploiement sur Vercel nécessite trois valeurs secrètes, qu'il serait risqué de révéler.
Afin de permettre à Github de réussir le déploiement sans rédiger ces valeurs en dur dans le répertoire, nous utilisons les secrets d'environnement Github.
On compte parmis ces variables secrètes :
- VERCEL_ORG_ID: L'ID Vercel du compte gestionnaire du projet.
- VERCEL_PROJECT_ID: L'ID Vercel du projet
- VERCEL_TOKEN: Un token mis en place par le gestionnaire de projet depuis son compte Vercel.