import { LogType } from "../log.type";

export const mockLogs: LogType[] = [
  {
    date: '22/07/2024',
    title: 'Specs Meeting',
    relatedPeople: ['Bob Rob', 'Robby Bobby'],
    summary: 'Spec meeting re: Widgets',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices metus nisi, sit amet eleifend tellus dictum ac. Nunc non massa nec dui rutrum pharetra.',
    rating: 'high',
  },
  {
    date: '22/07/2024',
    title: 'Weekend work',
    relatedPeople: ['Steph Gu', 'Tina Fer'],
    summary: 'Meeting re: weekend work',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices metus nisi, sit amet eleifend tellus dictum ac. Nunc non massa nec dui rutrum pharetra.',
    rating: 'low',
  },
  {
    date: '22/07/2024',
    title: 'Pest prevention',
    relatedPeople: ['Bob Rob', 'Steph Fu'],
    summary: 'Meeting re: public pests',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices metus nisi, sit amet eleifend tellus dictum ac. Nunc non massa nec dui rutrum pharetra.',
    rating: 'medium',
  },
];
