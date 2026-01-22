# Propositions d'amélioration

Ce chapitre propose des pistes d'amélioration concrètes basées sur mes observations.

```{image} _images/header_06_ameliorations.png
:alt: Improvements Header
:width: 100%
:align: center
```

## Introduction

Fort de mes observations et de mon expérience de ces premiers mois, je propose ici des pistes d'amélioration concrètes, dans mon domaine de compétence, pour contribuer à l'efficacité de l'équipe.

```{admonition} Approche
:class: note

Ces propositions sont formulées avec humilité, en tant que regard neuf sur l'existant. Elles visent à apporter de la valeur tout en respectant les contraintes et l'historique de l'équipe.
```

---

## Proposition 1 : Unification des outils de reporting

Cette proposition vise à simplifier les outils de suivi de l'équipe.

### Constat (Reporting)

Actuellement, plusieurs outils coexistent pour le reporting :

- Dashboard Knock Analytics (visualisation temps réel)
- Scripts de génération de rapports hebdomadaires
- Exports manuels vers Excel

### Proposition (Reporting)

L'idée est de regrouper ces outils en un dashboard unifié.

```{mermaid}
flowchart LR
    subgraph "Situation actuelle"
        A1[Dashboard] 
        A2[Script Report]
        A3[Export Excel]
    end
    
    subgraph "Proposition"
        B1[Dashboard Unifié]
        B1 --> B2[Tab: Vue temps réel]
        B1 --> B3[Tab: Weekly Report]
        B1 --> B4[Tab: Export]
    end
    
    A1 -.-> B1
    A2 -.-> B1
    A3 -.-> B1
    
    style B1 fill:#00ff9d,stroke:#000,color:#000
```

**Avantages** :

Cette solution présente plusieurs bénéfices.

- Point d'entrée unique pour l'équipe
- Cohérence des données et des calculs
- Maintenance simplifiée (un seul code base)
- Meilleure expérience utilisateur

**Effort estimé** : 2-3 semaines de développement

### Statut

Cette proposition a été largement implémentée durant le mois de janvier 2026.

```{admonition} Réalisation concrète
:class: tip

Le **CMM Dashboard** présenté dans le chapitre [Missions](050_missions.md) concrétise cette vision. L'unification est effective (Executive Overview, Weekly Report HTML/PPTX, Pipeline...).
```

---

## Proposition 2 : Centralisation de la documentation

Cette proposition vise à améliorer l'accès à la documentation.

### Constat (Documentation)

La documentation est actuellement répartie entre :
- GitLab (README, docs techniques)
- SharePoint (procédures)
- Teams (discussions, fichiers)
- Sphinx (documentations formelles)

Cela peut créer de la confusion pour un nouvel arrivant.

### Proposition (Centralisation)

Créer un **portail documentaire unique** basé sur Sphinx, avec :

| Quick Start | Guide d'intégration nouveaux arrivants |
| Procédures | Toutes les procédures opérationnelles |
| Technique | Documentation des projets |
| Formation | Liens vers les ressources NSE |

**Structure proposée** :

```
docs/
├── index.md (portail d'accueil)
├── quickstart/
│   ├── onboarding.md
│   └── tools.md
├── procedures/
│   ├── lab/
│   └── support/
└── projects/
    ├── knock/
    ├── lab-management/
    └── mcp/
```

**Effort estimé** : 1-2 semaines (réorganisation)

---

## Proposition 3 : Automatisation du cycle de vie Lab

Cette proposition s'attaque à la lourdeur administrative de la gestion du lab pour fluidifier l'expérience utilisateur.

### Constat (Lab)

La gestion des VMs dans le lab implique plusieurs étapes manuelles :
- Réservation d'IP dans NetBox
- Création de la VM dans vSphere
- Configuration réseau
- Mise à jour DNS

### Proposition (Automatisation)

Développer un **pipeline automatisé complet** :

```{mermaid}
flowchart TB
    A[Demande utilisateur] --> B[Formulaire Web]
    B --> C{Validation}
    C -->|OK| D[Réservation IP<br/>NetBox]
    D --> E[Création VM<br/>Scripts]
    E --> F[Configuration<br/>Cloud-Init]
    F --> G[Mise à jour DNS]
    G --> H[Notification<br/>utilisateur]
    
    C -->|KO| I[Rejet avec<br/>motif]
    
    style A fill:#1a1a2e,stroke:#DA291C,color:#fff
    style H fill:#00ff9d,stroke:#000,color:#000
```

**Fonctionnalités clés** :

- Interface web simple pour les demandes
- Validation automatique des ressources disponibles
- Provisioning en 5-10 minutes
- Notification par email/Teams

**Effort estimé** : 4-6 semaines

---

## Proposition 4 : Tests automatisés pour les scripts

Pour garantir la qualité du code, la mise en place d'environnements de pré-production (staging) et production est essentielle. Mais pour aller plus loin et appliquer les bonnes pratiques, il est nécessaire d'ajouter des tests unitaires à chaque projet.

### Constat (Tests)

Les scripts Python du Dashboard et du reporting ne disposent pas de tests unitaires formalisés.

### Proposition (Tests)

Mettre en place une **suite de tests automatisés** :

```text
# Exemple de structure de tests
tests/
├── test_data_parsing.py      # Tests du parsing CSV
├── test_kpi_calculations.py  # Tests des calculs KPIs
├── test_report_generation.py # Tests de génération
└── conftest.py               # Fixtures partagées
```

**Intégration CI/CD** :

Voici un exemple de configuration GitLab CI/CD pour automatiser les tests.

```yaml
# .gitlab-ci.yml (extrait)
test:
  stage: test
  script:
    - pip install pytest
    - pytest tests/ --verbose
  coverage: '/TOTAL.*\s+(\d+%)/'
```

**Avantages** :

Les tests automatisés offrent plusieurs bénéfices.

- Détection précoce des régressions
- Documentation vivante du comportement attendu
- Confiance lors des modifications

**Effort estimé** : 1-2 semaines

---

## Proposition 5 : Documentation du projet MCP

Cette proposition concerne la documentation du projet innovant MCP.

### Constat (MCP)

Le projet MCP est innovant mais peu documenté. Les difficultés rencontrées (versions FMG, configuration JSON-RPC) pourraient bloquer de futurs développeurs.

### Proposition (Doc MCP)

Créer une **documentation complète** du PoC MCP :

1. **Guide d'installation** : Étapes détaillées pour reproduire l'environnement
2. **Troubleshooting** : Problèmes connus et solutions
3. **Architecture** : Diagrammes et flux de données
4. **API Reference** : Endpoints FortiManager utilisés

```{admonition} Valeur ajoutée
:class: important

Cette documentation pourrait être partagée avec la communauté (GitHub) pour favoriser l'adoption du protocole MCP avec les produits Fortinet.
```

**Effort estimé** : 1 semaine

---

## Synthèse des propositions

Le tableau ci-dessous résume l'ensemble des propositions avec leur impact et effort estimés.

| # | Proposition | Impact | Effort | Priorité |
|---|-------------|--------|--------|----------|
| 1 | Unification reporting | {bdg-danger}`High` | Moyen | Haute |
| 2 | Centralisation docs | {bdg-warning}`Medium` | Faible | Moyenne |
| 3 | Automatisation Lab | {bdg-danger}`High` | Élevé | Haute |
| 4 | Tests automatisés | {bdg-warning}`Medium` | Faible | Moyenne |
| 5 | Doc MCP | {bdg-info}`Low` | Faible | Basse |

```{admonition} Engagement
:class: tip

Je m'engage à contribuer activement à la réalisation de ces propositions dans la suite de mon alternance, en coordination avec mon tuteur et l'équipe.
```
