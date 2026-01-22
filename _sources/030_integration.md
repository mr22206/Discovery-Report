# Intégration

Ce chapitre décrit mes premières semaines au sein de l'équipe NOC/SOC de Fortinet à Sophia-Antipolis.

```{image} _images/header_03_integration.png
:alt: Integration Teamwork
:width: 100%
:align: center
```

## Les premiers jours

L'arrivée dans une nouvelle entreprise est un moment clé. Voici le déroulement de mes premiers pas chez Fortinet.

### Jour 1 : Arrivée chez Fortinet (27 octobre 2025)

Mon premier jour a été riche en découvertes et en rencontres. L'accueil a été structuré et bienveillant :

```{admonition} Étapes d'intégration - Jour 1
:class: note

1. ✅ Récupération du badge visiteur (en attente du badge permanent)
2. ✅ Attribution du matériel informatique (laptop)
3. ✅ Création des accès aux systèmes internes
4. ✅ Présentation à l'équipe NOC/SOC
5. ✅ Tour des locaux et présentation de l'environnement
```

### L'équipe NOC/SOC

J'ai été accueilli au sein de l'équipe **CSE-INTL-CMM** (Consulting Systems Engineer - International), sous la responsabilité de **Jean-Pierre Forcioli**.

```{note}
*CMM* signifie *Central Management & Monitoring*. Cela regroupe les produits Fortinet en charge de l'administration et la surveillance centralisées (FortiManager et FortiAnalyzer respectivement). Désormais, on parle plus d'activité NOC (Network Operations Center) et SOC (Security Operations Center) pour refléter les missions de l'équipe.
```

```{mermaid}
graph TB
    subgraph "Équipe NOC/SOC Sophia"
        MGR[Jean-Pierre Forcioli<br/>Manager]
        
        subgraph "Ingénieurs CSE"
            CSE1[CSE Senior]
            CSE2[CSE Senior]
            CSE3[CSE]
        end
        
        subgraph "Alternants/Stagiaires"
            ALT1[Mohammad Rezki<br/>Alternant]
            INT1[Autres interns]
        end
    end
    
    MGR --> CSE1
    MGR --> CSE2
    MGR --> CSE3
    MGR --> ALT1
    MGR --> INT1
    
    style ALT1 fill:#DA291C,stroke:#fff,color:#fff
```

L'ambiance au sein de l'équipe est collaborative et technique. Dès le premier jour, j'ai pu échanger avec d'autres alternants et stagiaires sur leurs expériences.

## Première semaine : Installation

Cette première semaine a été dédiée à la construction d'un socle technique solide pour la suite de l'alternance.

### Configuration de l'environnement de travail

La première semaine a été consacrée à la mise en place de mon environnement technique :

| Étape | Description | Durée |
|-------|-------------|-------|
| Installation laptop | Configuration Windows/Linux, VPN | 1 jour |
| Accès GitLab | Clonage des dépôts de l'équipe | 0.5 jour |
| Formation produits | Introduction FortiOS, FortiManager | 2 jours |
| Certifications NSE | NSE 1, NSE 3, FCA | Semaine 1 |
| Lab Setup | Configuration de l'environnement de test | Semaine 1 |

```{admonition} Certifications Fortinet obtenues
:class: tip

**Formations complétées (Octobre 2025) :**
- 📚 **Getting Started in Cybersecurity 3.0** (28/10/2025)
- 📚 **FortiGate 7.6 Operator** (29/10/2025)
- 📚 **FortiAnalyzer 7.6 Administrator** (29/10/2025)

**Certifications et badges :**
- 🏅 **Fortinet Certified Associate (FCA) in Cybersecurity** (29/10/2025)
- 🎖️ **NSE 1** - Getting Started in Cybersecurity v3.0
- 🎖️ **NSE 3** - FortiGate Operator v7.6
```

### Outils et méthodologies découverts

Le tableau ci-dessous résume les principaux outils et méthodologies utilisés par l'équipe :

```{admonition} Stack technique de l'équipe
:class: tip

**Gestion de code**
- GitLab interne (CI/CD pipelines)
- Branches et merge requests

**Documentation**
- Sphinx (génération de doc)
- SharePoint

**Infrastructure Lab**
- vSphere (virtualisation)
- NetBox (IPAM/DCIM)
- Docker (conteneurisation)

**Développement**
- Python (scripts, automatisation)
- Streamlit (dashboards)
```

## Semaines 2-3 : Immersion dans les projets

Une fois l'environnement prêt, j'ai pu plonger dans le vif du sujet et contribuer aux projets de l'équipe.

### Prise en main des projets existants

Rapidement, j'ai été impliqué dans des projets concrets de l'équipe :

```{mermaid}
timeline
    title Chronologie d'intégration
    
    section Semaine 1
        Oct 27-31 : Accueil et installation
                  : Rencontre équipe
                  : Formation initiale
    
    section Semaine 2
        Nov 4-8 : Découverte du Dashboard
               : Premier commit GitLab
               : Documentation Sphinx
    
    section Semaine 3
        Nov 10-14 : Travail sur Lab Management
                  : VM dans vSphere
                  : Intégration NetBox
```

### Premier projet : Knock Analytics Dashboard

Dès la fin de la première semaine, j'ai commencé à travailler sur le **Dashboard Knock Analytics**, un outil interne permettant de visualiser les KPIs de l'équipe.

**Mes premières contributions** :
- Correction de bugs d'affichage
- Amélioration de la documentation
- Ajout de nouvelles visualisations

Le nouveau rapport hebdomadaire a été déployé avec succès, apportant une meilleure visibilité sur l'activité de l'équipe. Ci-après un exemple de rapport :

```{figure} _images/weekly-report-html.png
:alt: Exemple de rapport hebdomadaire
:width: 80%

Exemple de rapport hebdomadaire généré automatiquement (données anonymisées).
```

## Accompagnement et suivi

L'autonomie n'exclut pas l'accompagnement. Un cadre de suivi a été mis en place dès le début.

### Le rôle du tuteur

Jean-Pierre Forcioli m'a accompagné tout au long de cette phase d'intégration avec :

- **Points hebdomadaires** pour faire le bilan des avancées
- **Disponibilité** pour répondre à mes questions techniques
- **Autonomie progressive** dans la gestion de mes tâches
- **Feedback constructif** sur mon travail

### Ressources d'apprentissage

L'entreprise met à disposition de nombreuses ressources :

```{admonition} Formation continue
:class: note

- 📚 **Documentation interne** (CMM)
- 🎓 **Plateforme NSE** (certifications Fortinet)
- 👥 **Knowledge sharing** entre équipes
- 🔬 **Accès au lab** pour expérimenter
```

## Bilan de l'intégration

Après les trois premières semaines, je me suis senti :

- **Accueilli** : L'équipe a pris le temps de m'intégrer
- **Outillé** : Tous les accès et ressources nécessaires
- **Challengé** : Des projets concrets dès le départ
- **Accompagné** : Un suivi régulier par mon tuteur

```{admonition} Point fort
:class: tip

Ce qui m'a particulièrement marqué : la **confiance** accordée aux nouveaux arrivants. Dès les premiers jours, j'ai eu accès au code source, aux systèmes de production (en lecture), et j'ai pu proposer des modifications.
```
