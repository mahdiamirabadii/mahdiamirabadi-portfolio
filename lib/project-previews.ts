export const PROJECT_PREVIEW_IMAGES: Record<string, string> = {
  mizdan: "/projects/mizdan-preview.jpg",
  "planner-app": "/projects/planner-app-preview.svg",
  "contact-app": "/projects/contact-app-preview.svg",
  "quiz-app": "/projects/quiz-app-preview.svg",
  "todo-app": "/projects/todo-app-preview.svg",
  "product-filter": "/projects/product-filter-preview.svg",
};

export function getProjectPreviewImage(project: {
  id: string;
  previewImage?: string;
}) {
  return project.previewImage ?? PROJECT_PREVIEW_IMAGES[project.id];
}
