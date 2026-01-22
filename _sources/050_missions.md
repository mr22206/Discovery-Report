# Missions confiées

Ce chapitre détaille les missions qui m'ont été confiées durant cette alternance et les réalisations associées.

```{image} _images/header_05_missions.png
:alt: Missions Header
:width: 100%
:align: center
```

## Vue d'ensemble

Mon alternance s'articule autour de **trois axes principaux**, définis avec mon tuteur Jean-Pierre Forcioli :

```{mermaid}
mindmap
  root((Missions<br/>Alternance))
    NOC/SOC
      Knock Analytics
      Dashboard
      Weekly Report
      FortiAI Integration
    Lab Management
      Automatisation VM
      NetBox/vSphere
      Documentation
    Knowledge Sharing
      Core Tech
      Formation équipe
      MCP Innovation
```

---

## Axe 1 : CMM Dashboard Tooling

Cet axe constitue le cœur technologique de mon alternance. Il a consisté à transformer un ensemble de scripts disparates en une véritable suite logicielle unifiée : le **CMM Dashboard**.

### 1. Introduction

Le **CMM Dashboard** (Central Management & Monitoring) est une application web analytique développée pour piloter l'activité de l'équipe NOC/SOC. Elle centralise les données issues de l'outil de gestion Knock pour offrir une visualisation temps réel des KPIs, faciliter la génération de rapports hebdomadaires et suivre la performance commerciale et technique.

### 2. Architecture Technique

Le projet repose sur une stack moderne et modulaire, conçue pour la performance et la maintenabilité.

- **Technologie Principale** : Python avec le framework **Streamlit**.
- **Architecture** : Modulaire (un module par onglet fonctionnel) pour faciliter la maintenance.
- **Données** :
    - *Source* : API Knock (récupération des issues, projets, custom fields).
    - *Stockage Local* : Cache optimisé en CSV pour la performance, avec rafraîchissement planifié.
    - *Traitement* : Pandas pour le nettoyage, la transformation et l'analyse.
- **Génération de Documents** :
    - *HTML* : Moteur de template pour les rapports email interactifs.
    - *PPTX* : Librairie `python-pptx` pour la génération automatique des slides avec mise en page précise.

### 3. Fonctionnalités Principales (Modules)

L'application est structurée en plusieurs onglets thématiques accessibles via une navigation fluide. Visualisez chaque module ci-dessous :

#### 3.1 Analyse Commerciale & Stratégique
Ce premier ensemble de modules permet le suivi de la performance commerciale et l'identification des tendances.

::::{tab-set}

:::{tab-item} Executive Overview
**Tableau de bord de direction offrant une vue synthétique de l'activité.**

*   **KPIs Clés** : Revenu total (Total Value), Closing Volume, Win Rate.
*   **Comparaisons** : Analyse Year-on-Year (YoY) et Quarter-on-Quarter (QoQ).
*   **Top 5 Deals** : Visualisation immédiate des opportunités majeures.

```{figure} _images/dashboard-home.png
:alt: Executive Overview Interface
:width: 100%
:align: center
```
:::

:::{tab-item} Sales Pipeline
**Analyse détaillée du tunnel de vente et des opportunités en cours.**

*   **Funnel de Vente** : Visualisation des étapes (*New -> In Progress -> Closed*).
*   **Répartition** : Suivi des dossiers gagnés, perdus, annulés.
*   **Prévisions** : Identification des dossiers à haut potentiel.

```{figure} _images/Sales_Pipeline.png
:alt: Sales Pipeline Interface
:width: 100%
:align: center
```
:::

:::{tab-item} Products & Regions
**Analyse dimensionnelle de l'activité.**

*   **Répartition Géographique** : Cartographie des revenus par région (EMEA, APAC...).
*   **Mix Produit** : Analyse de performance par ligne de produit.
*   **Verticales** : Segmentation par secteur client.

```{figure} _images/Products_Regions.png
:alt: Products and Regions Interface
:width: 100%
:align: center
```
:::

:::{tab-item} Trends & Analytics
**Analyse historique et tendances de fond.**

*   **Évolution Temporelle** : Courbes de tendance sur plusieurs années.
*   **Saisonnalité** : Identification des pics de charge.

```{figure} _images/Trends_Analytics.png
:alt: Trends and Analytics Interface
:width: 100%
:align: center
```
:::

::::

#### 3.2 Reporting & Opérations
Ces modules constituent le cœur opérationnel de l'outil, automatisant la production des rapports hebdomadaires.

::::{tab-set}

:::{tab-item} Weekly Report
**Le module critique pour le management : génération de rapports.**

*   **Génération Automatique** : Rapport HTML structuré en un clic.
*   **Support PPTX** : Slides PowerPoint chartés, avec pagination intelligente.
*   **Workflow** : Mode Brouillon vs Officiel pour validation.

```{figure} _images/Weekly_Report.png
:alt: Weekly Report Interface
:width: 100%
:align: center
```
:::

:::{tab-item} Report Hub
**Centre d'archivage et de gestion de l'historique.**

*   **Centralisation** : Accès à tous les rapports (Drafts/Officiels).
*   **Actions** : Prévisualisation, Téléchargement (HTML/PPTX), Suppression.
*   **Analytique** : Suivi de l'évolution des KPIs reportés.

```{figure} _images/Report_Hub.png
:alt: Report Hub Interface
:width: 100%
:align: center
```
:::

::::

#### 3.3 Administration & Outils
Ces fonctionnalités permettent le pilotage de l'équipe et la maintenance des données du dashboard.

::::{tab-set}

:::{tab-item} CSE Management
**Outil de pilotage de la charge d'équipe.**

*   **Charge Individuelle** : Dossiers gérés par ingénieur.
*   **Performance** : Temps de traitement, complexité.

```{figure} _images/CSE_Management.png
:alt: CSE Management Interface
:width: 100%
:align: center
```
:::

:::{tab-item} Automation
**Supervision des automates de gestion.**

*   **Cycle de Vie** : Scripts de détection (inactivité 15j/30j).
*   **Actions** : Warnings automatiques, clôtures.
*   **Logs** : Visualisation des journaux d'exécution.

```{figure} _images/Automation.png
:alt: Automation Console
:width: 100%
:align: center
```
:::

:::{tab-item} Data Management
**Gestion de la fraîcheur des données.**

*   **On-Demand** : Mise à jour manuelle immédiate.
*   **Scheduled** : Cron job quotidien (08:00) pour le cache CSV.
*   **Logs** : Suivi des mises à jour.

```{figure} _images/Data_Management.png
:alt: Data Management Interface
:width: 100%
:align: center
```
:::

:::{tab-item} Filtres & Analyse
**Contrôle global des données visualisées (Sidebar).**

*   **Filtres Dynamiques** : Sélection par Années, Statut, Quarter.
*   **Dimensions** : Filtrage par Région, Produit et Phase.
*   **Mode** : Bascule "Full Analysis" vs "Quarterly Focus".

```{figure} _images/Filters_and_Docs.png
:alt: Interface Filtres et Sidebar
:width: 100%
:align: center
```
:::

::::

### 4. Points Forts & Valeur Ajoutée

Ce projet apporte une valeur immédiate et mesurable à l'équipe.

- **Gain de Temps** : La génération automatique des rapports (HTML + PPTX) réduit une tâche de 2h à quelques secondes.
- **Fiabilité** : Les données proviennent directement de la source (Knock) sans manipulation manuelle Excel.
- **Visibilité** : Accès temps réel aux KPIs critiques pour la prise de décision.
- **Flexibilité** : L'architecture modulaire permet d'ajouter rapidement de nouvelles analyses.

### Compétences développées (Dashboard)

Ce travail m'a permis de développer les compétences suivantes.

| Compétence | Niveau acquis |
|------------|---------------|
| Python (Pandas, Streamlit) | 4/5 |
| Analyse de données | 3/5 |
| CI/CD (GitLab) | 4/5 |
| Documentation technique | 4/5 |

---

## Axe 2 : Lab Management

Cet axe concerne l'amélioration de la gestion du laboratoire virtualisé de l'équipe.

### Contexte (Lab Management)

L'équipe dispose d'un **laboratoire virtualisé** (vSphere) pour les tests et démonstrations. La gestion des VMs et des adresses IP était partiellement manuelle.

### Objectifs

Les objectifs fixés pour ce chantier sont :

1. **Étudier les options d'automatisation** de création de VMs
2. **Intégrer NetBox** comme source de vérité (IPAM)
3. **Documenter les bonnes pratiques**

### Analyse d'architecture

J'ai réalisé une étude comparative de **trois approches d'intégration** NetBox/vSphere :

```{mermaid}
flowchart TB
    subgraph "Approche 1 : Observation"
        OBS_USER[Admin] --> OBS_VS[vSphere]
        OBS_SCRIPT[Script Sync] --> OBS_VS
        OBS_SCRIPT --> OBS_NB[NetBox]
    end
    
    subgraph "Approche 2 : Orchestration"
        ORCH_USER[Utilisateur] --> ORCH_PORTAL[Portail Web]
        ORCH_PORTAL --> ORCH_NB[NetBox]
        ORCH_PORTAL --> ORCH_ANS[Scripts Auto]
        ORCH_ANS --> ORCH_VS[vSphere]
    end
    
    subgraph "Approche 3 : Hybride"
        HYB_ROUTE{Besoin?}
        HYB_ROUTE -->|Standard| HYB_A[Route Usine]
        HYB_ROUTE -->|Recherche| HYB_B[Route Sandbox]
    end
    
    style OBS_NB fill:#00ff9d,stroke:#000,color:#000
    style ORCH_PORTAL fill:#ff00dd,stroke:#000,color:#000
    style HYB_ROUTE fill:#ff9100,stroke:#000,color:#000
```

| Approche | Avantages | Inconvénients | Cible |
|----------|-----------|---------------|-------|
| Observation | Liberté totale | Données "sales" | R&D, Tests |
| Orchestration | Hygiène parfaite | Rigide | Formation |
| Hybride | Flexible | Deux systèmes | Recommandée |

### Réalisations

Voici les principaux livrables de cet axe de travail.

```{admonition} Livrables
:class: note

1. **Document d'architecture** : Analyse SWOT des 3 approches
2. **Analyse des options** : Comparaison Ansible/Scripts Python
3. **Intégration NetBox** : Synchronisation des assets
4. **Documentation Sphinx** : Guide complet du lab
```

### Compétences développées (Lab)

Ce travail m'a permis de développer les compétences suivantes.

| Compétence | Niveau acquis |
|------------|---------------|
| vSphere Administration | 3/5 |
| Scripts Python | 4/5 |
| NetBox (IPAM/DCIM) | 4/5 |
| Architecture système | 3/5 |

---

## Axe 3 : Innovation & Knowledge Sharing

Cet axe regroupe les travaux exploratoires et le partage de connaissances au sein de l'équipe.

### Projet MCP (Model Context Protocol)

Le projet MCP représente la composante innovation de mon alternance.

#### Contexte (MCP)

Le **MCP (Model Context Protocol)** est un protocole émergent permettant de connecter des LLM (Large Language Models) à des outils externes.

```{admonition} Objectif du PoC
:class: important

Connecter **Claude Desktop** (Anthropic) à **FortiManager** pour permettre la gestion conversationnelle des équipements Fortinet.
```

#### Architecture cible

Le schéma suivant illustre l'architecture envisagée pour le projet MCP.

```{mermaid}
flowchart LR
    subgraph "Client"
        CLAUDE[Claude Desktop]
    end
    
    subgraph "MCP Server"
        MCP[Serveur MCP]
        API[API FortiManager]
    end
    
    subgraph "Infrastructure"
        FMG[FortiManager]
        FGT1[FortiGate 1]
        FGT2[FortiGate 2]
    end
    
    CLAUDE <-->|MCP Protocol| MCP
    MCP <-->|JSON-RPC| API
    API <--> FMG
    FMG --> FGT1
    FMG --> FGT2
    
    style CLAUDE fill:#6B4EE6,stroke:#fff,color:#fff
    style FMG fill:#DA291C,stroke:#fff,color:#fff
```

#### Travaux réalisés

Voici les principales étapes réalisées sur ce projet.

- Étude du protocole MCP et de l'API FortiManager
- Mise en place d'un environnement de test (FortiPoc)
- **Test de connexion** : Cible FMG v7.6 (IP : `10.210.34.120`)
- Documentation des limitations rencontrées

#### Difficultés rencontrées

Plusieurs obstacles techniques ont été identifiés, notamment liés à la licence.

```{admonition} Blocages techniques
:class: warning

- **Version FMG** : La version "Development" utilisée ne dispose pas de shell accessible pour le debug
- **Licence** : Problèmes d'activation limitant les fonctionnalités API
- **Compatibilité** : Ajustements nécessaires pour le format JSON-RPC
- **CORS** : Configuration des headers manquante sur le serveur de dev
```

### Knowledge Sharing

En parallèle, je participe à l'initiative de **partage de connaissances** :

- Contribution à la documentation **CMM**
- Rédaction de guides techniques (Sphinx)
- Présentations internes sur mes travaux

**Certifications Fortinet obtenues** :

Je profite également de l'accès aux ressources de formation pour passer les certifications officielles Fortinet (NSE).

- **Fierce FortiGate** (NSE 1, 2, 3) : Fondamentaux de la cybersécurité
- **Fortinet Certified Fundamentals** (FCF) : Certifié
- **Fortinet Certified Associate** (FCA) : En cours de préparation)

---

## Synthèse des missions

Le diagramme ci-dessous illustre la répartition de mon temps entre les différents axes.

```{mermaid}
pie title Répartition du temps (estimation)
    "Dashboard & Reporting" : 65
    "Documentation & KS" : 15
    "Lab Management" : 10
    "MCP & Innovation" : 10
```

### État d'avancement

Voici l'état d'avancement de chaque mission à ce jour.

| Mission | Statut | Progression |
|---------|--------|-------------|
| Dashboard Knock | {bdg-success}`En production` | 90% |
| Weekly Report | {bdg-success}`En production` | 85% |
| Lab Automation | {bdg-warning}`En développement` | 60% |
| Projet MCP | {bdg-warning}`PoC en cours` | 40% |
| Documentation | {bdg-info}`Continu` | - |
