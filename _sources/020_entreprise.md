# L'Entreprise Fortinet

Ce chapitre présente Fortinet, son histoire, ses produits, son organisation et les défis auxquels l'entreprise fait face.

```{image} _images/header_02_entreprise.png
:alt: Fortinet Headquarters
:width: 100%
:align: center
```

## Historique et identité

**Fortinet** a été fondée en **2000** à Sunnyvale, en Californie, par les frères Ken et Michael Xie. Le nom *Fortinet* est une contraction de *Fortified Networks* (réseaux fortifiés), reflétant la mission fondamentale de l'entreprise : sécuriser les infrastructures numériques.

Le tableau suivant présente les étapes clés de l'évolution de Fortinet :

```{admonition} Chiffres clés (2024)
:class: tip

- **Présence mondiale** : Plus de 750 000 clients dans le monde
- **Effectifs** : ~14 000 collaborateurs
- **Chiffre d'affaires** : ~5,5 milliards USD
- **Position** : Leader du marché des pare-feux (UTM/NGFW)
```

## Secteur d'activité

Fortinet opère dans le secteur de la **cybersécurité**, un domaine en constante évolution face aux menaces croissantes :

- Ransomwares et attaques ciblées
- Sécurisation des environnements cloud et hybrides
- Protection des infrastructures critiques (OT/IoT)
- Zero Trust Architecture

### Positionnement concurrentiel

Le graphique suivant illustre le positionnement de Fortinet par rapport à ses principaux concurrents sur le marché de la cybersécurité.

```{mermaid}
graph LR
    subgraph "Leaders Cybersécurité"
        A[Fortinet]:::fortinet
        B[Palo Alto Networks]
        C[Cisco]
        D[Check Point]
    end
    
    A --> E[FortiGate NGFW]
    A --> F[Security Fabric]
    A --> G[FortiGuard Labs]
    
    classDef fortinet fill:#DA291C,stroke:#fff,color:#fff
```

Fortinet se différencie par son approche **Security Fabric** : un écosystème intégré où tous les produits communiquent entre eux pour offrir une protection unifiée.

## Gamme de produits

Fortinet propose un portefeuille complet de produits de sécurité, couvrant l'ensemble des vecteurs d'attaque.

### Produits principaux

| Produit | Description | Usage |
|---------|-------------|-------|
| **FortiGate** | Pare-feu nouvelle génération (NGFW) | Protection périmétrique |
| **FortiManager** | Gestion centralisée des équipements | Administration |
| **FortiAnalyzer** | Analyse et reporting sécurité | SIEM interne |
| **FortiSIEM** | Corrélation d'événements | SOC |
| **FortiPAM** | Gestion des accès privilégiés | Zero Trust |

### Innovation : FortiAI

```{admonition} Focus Innovation
:class: important

**FortiAI** représente la nouvelle génération d'outils intégrant l'intelligence artificielle :
- Détection automatique des menaces
- Analyse comportementale
- Assistance aux opérateurs SOC
```

## Organisation

L'entreprise est structurée pour assurer une présence mondiale tout en conservant des pôles d'expertise locaux forts.

### Structure globale

L'organigramme ci-dessous schématise l'organisation géographique de Fortinet, du siège mondial jusqu'au site local de Sophia-Antipolis.

```{mermaid}
graph TB
    subgraph "Fortinet Global"
        HQ[Siège - Sunnyvale, USA]
        EMEA[Région EMEA]
        APAC[Région APAC]
        LATAM[Région LATAM]
    end
    
    EMEA --> FR[France]
    FR --> SOPHIA[Sophia-Antipolis]
    
    SOPHIA --> CSE[Équipe CSE]
    SOPHIA --> SALES[Équipe Sales]
    SOPHIA --> RD[R&D]
    
    style SOPHIA fill:#DA291C,stroke:#fff,color:#fff
    style CSE fill:#1a1a2e,stroke:#DA291C,color:#fff
```

### Le site de Sophia-Antipolis

Le centre **Sophia-Antipolis** joue un rôle stratégique pour la région EMEA; il héberge les pôles d'activités suivants:

- **Équipe Support technique Europe** pour l'assistance aux clients finaux
- **Équipe Consultants NOC/SOC Europe** pour l'aide aux projets avant-ventes
- **Équipe Certifications** pour la formation des clients finaux et des partenaires
- **Équipe Lab** pour la reproduction de cas clients ou la préparation de démonstrations.

## Défis et enjeux

Dans un secteur en perpétuelle mutation, Fortinet doit relever plusieurs défis stratégiques.

### Les grands défis de demain

1. **Transition vers le cloud** : Accompagner les clients dans leur migration tout en maintenant la sécurité
2. **Intelligence artificielle** : Intégrer l'IA dans les solutions de sécurité pour contrer des menaces de plus en plus sophistiquées
3. **Pénurie de talents** : Former et attirer les experts en cybersécurité
4. **Conformité réglementaire** : S'adapter aux évolutions (NIS2, DORA, RGPD)

### Engagement environnemental

Fortinet s'engage dans une démarche **RSE** avec :
- Réduction de l'empreinte carbone des datacenters
- Optimisation énergétique des appliances (ASIC propriétaires)
- Programmes de recyclage des équipements
