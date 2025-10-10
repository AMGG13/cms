import type { Schema, Struct } from '@strapi/strapi';

export interface BadgetsRole extends Struct.ComponentSchema {
  collectionName: 'components_badgets_roles';
  info: {
    displayName: 'Role';
    icon: 'briefcase';
  };
  attributes: {
    Role: Schema.Attribute.String;
  };
}

export interface BadgetsSkill extends Struct.ComponentSchema {
  collectionName: 'components_badgets_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    level: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    name: Schema.Attribute.String;
  };
}

export interface EducationsEducation extends Struct.ComponentSchema {
  collectionName: 'components_educations_educations';
  info: {
    displayName: 'education';
    icon: 'seed';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    end_date: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    long_description: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
    place: Schema.Attribute.String;
    short_description: Schema.Attribute.String;
    start_date: Schema.Attribute.Date;
  };
}

export interface ExperiencesProfessionalExperience
  extends Struct.ComponentSchema {
  collectionName: 'components_experiences_professional_experiences';
  info: {
    displayName: 'Professional Experience';
    icon: 'briefcase';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    company: Schema.Attribute.String;
    end_date: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    long_description: Schema.Attribute.Blocks;
    role: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    start_date: Schema.Attribute.Date;
  };
}

export interface LaunguagesLanguague extends Struct.ComponentSchema {
  collectionName: 'components_launguages_languagues';
  info: {
    displayName: 'languague';
    icon: 'discuss';
  };
  attributes: {
    langueague: Schema.Attribute.String;
    level: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
  };
}

export interface ProjectsProject extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'project';
    icon: 'code';
  };
  attributes: {
    end_date: Schema.Attribute.Date;
    long_description: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    skill_badgets: Schema.Attribute.Component<'badgets.skill', true>;
    start_date: Schema.Attribute.Date;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url_deploy: Schema.Attribute.String;
    url_github: Schema.Attribute.String;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    cv_file: Schema.Attribute.Media<'files'>;
    download_cv_label: Schema.Attribute.String;
    greeting: Schema.Attribute.String;
    id_section: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SectionsCommonSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_common_sections';
  info: {
    displayName: 'common_section';
  };
  attributes: {
    id_section: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'contact';
    icon: 'cup';
  };
  attributes: {
    checkbox_field_label: Schema.Attribute.String;
    contact_description: Schema.Attribute.Text;
    email_field_label: Schema.Attribute.String;
    id_section: Schema.Attribute.String;
    message_field_label: Schema.Attribute.String;
    name_field_label: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
    submit_button_label: Schema.Attribute.String;
  };
}

export interface SkillsTechnicalSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_technical_skills';
  info: {
    displayName: 'Sector Skill';
    icon: 'monitor';
  };
  attributes: {
    sector_name: Schema.Attribute.String;
    skill: Schema.Attribute.Component<'badgets.skill', true>;
  };
}

export interface SocialsSocial extends Struct.ComponentSchema {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'social';
    icon: 'message';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'github',
        'linkedin',
        'portfolio',
        'facebook',
        'email',
        'phone',
        'common_link',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'badgets.role': BadgetsRole;
      'badgets.skill': BadgetsSkill;
      'educations.education': EducationsEducation;
      'experiences.professional-experience': ExperiencesProfessionalExperience;
      'launguages.languague': LaunguagesLanguague;
      'projects.project': ProjectsProject;
      'sections.about': SectionsAbout;
      'sections.common-section': SectionsCommonSection;
      'sections.contact': SectionsContact;
      'skills.technical-skills': SkillsTechnicalSkills;
      'socials.social': SocialsSocial;
    }
  }
}
