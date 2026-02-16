<template>
  <div class="tag-cloud" :class="{ 'tag-cloud-dark': dark }">
    <h3 v-if="title" class="tag-cloud-title">{{ title }}</h3>
    <div class="tags-container">
      <RouterLink
        v-for="tag in tags"
        :key="tag.slug"
        :to="`/knowledge/${tag.slug}`"
        class="cloud-tag"
        :class="[`tag-size-${tag.size || 'md'}`, `tag-cat-${tag.category}`]"
      >
        {{ tag.label }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

export interface CloudTag {
  label: string
  slug: string
  category: string
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<{
  tags: CloudTag[]
  title?: string
  dark?: boolean
}>(), {
  title: '',
  dark: false
})
</script>

<script lang="ts">
export const techTags: CloudTag[] = [
  { label: 'Микросервисы', slug: 'microservices-architecture', category: 'architecture', size: 'lg' },
  { label: 'Kubernetes', slug: 'kubernetes-production', category: 'devops', size: 'lg' },
  { label: 'NDR', slug: 'ndr-network-detection-response', category: 'security', size: 'lg' },
  { label: 'GraphQL', slug: 'graphql-rest-api-design', category: 'backend', size: 'md' },
  { label: 'Vue', slug: 'vue-vs-react-vs-angular', category: 'frontend', size: 'md' },
  { label: 'React', slug: 'vue-vs-react-vs-angular', category: 'frontend', size: 'md' },
  { label: 'Angular', slug: 'vue-vs-react-vs-angular', category: 'frontend', size: 'md' },
  { label: 'Dgraph', slug: 'graphdb-dgraph-guide', category: 'databases', size: 'md' },
  { label: 'PostgreSQL', slug: 'postgresql-optimization', category: 'databases', size: 'md' },
  { label: 'MongoDB', slug: 'mongodb-use-cases', category: 'databases', size: 'sm' },
  { label: 'Redis', slug: 'redis-caching-strategies', category: 'databases', size: 'md' },
  { label: 'Docker', slug: 'docker-containerization', category: 'devops', size: 'md' },
  { label: 'CI/CD', slug: 'cicd-best-practices', category: 'devops', size: 'md' },
  { label: 'Event-driven', slug: 'kafka-event-streaming', category: 'architecture', size: 'md' },
  { label: 'NATS', slug: 'nats-messaging', category: 'architecture', size: 'sm' },
  { label: 'Node.js', slug: 'nodejs-python-java-go', category: 'backend', size: 'md' },
  { label: 'Python', slug: 'nodejs-python-java-go', category: 'backend', size: 'sm' },
  { label: 'Java', slug: 'nodejs-python-java-go', category: 'backend', size: 'sm' },
  { label: 'Go', slug: 'nodejs-python-java-go', category: 'backend', size: 'sm' },
  { label: 'TypeScript', slug: 'typescript-enterprise', category: 'frontend', size: 'md' },
  { label: 'API Gateway', slug: 'api-gateway-patterns', category: 'backend', size: 'md' },
  { label: 'BPM', slug: 'bpm-business-automation', category: 'architecture', size: 'sm' },
  { label: 'REST API', slug: 'graphql-rest-api-design', category: 'backend', size: 'sm' },
  { label: 'Сетевая безопасность', slug: 'network-security-smb', category: 'security', size: 'md' },
  { label: 'Agile', slug: 'agile-development-process', category: 'methodology', size: 'sm' },
  { label: 'Графовые БД', slug: 'graphdb-dgraph-guide', category: 'databases', size: 'sm' },
  { label: 'DPI', slug: 'network-traffic-analysis', category: 'security', size: 'sm' },
]
</script>

<style scoped>
.tag-cloud {
  padding: var(--spacing-xl) 0;
}

.tag-cloud-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-md);
}

.tag-cloud-dark .tag-cloud-title {
  color: rgba(148, 163, 184, 0.5);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.cloud-tag {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  border: 1px solid transparent;
  line-height: 1.4;
}

.cloud-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Sizes */
.tag-size-sm { font-size: 11px; padding: 3px 10px; }
.tag-size-md { font-size: 13px; }
.tag-size-lg { font-size: 15px; font-weight: 600; padding: 6px 16px; }

/* Category colors */
.cloud-tag.tag-cat-architecture {
  background: rgba(239, 63, 41, 0.08);
  color: #ef3f29;
  border-color: rgba(239, 63, 41, 0.15);
}
.cloud-tag.tag-cat-architecture:hover {
  background: rgba(239, 63, 41, 0.15);
}

.cloud-tag.tag-cat-security {
  background: rgba(128, 47, 185, 0.08);
  color: #802fb9;
  border-color: rgba(128, 47, 185, 0.15);
}
.cloud-tag.tag-cat-security:hover {
  background: rgba(128, 47, 185, 0.15);
}

.cloud-tag.tag-cat-frontend {
  background: rgba(34, 197, 94, 0.08);
  color: #16a34a;
  border-color: rgba(34, 197, 94, 0.15);
}
.cloud-tag.tag-cat-frontend:hover {
  background: rgba(34, 197, 94, 0.15);
}

.cloud-tag.tag-cat-backend {
  background: rgba(245, 158, 11, 0.08);
  color: #d97706;
  border-color: rgba(245, 158, 11, 0.15);
}
.cloud-tag.tag-cat-backend:hover {
  background: rgba(245, 158, 11, 0.15);
}

.cloud-tag.tag-cat-devops {
  background: rgba(59, 130, 246, 0.08);
  color: #2563eb;
  border-color: rgba(59, 130, 246, 0.15);
}
.cloud-tag.tag-cat-devops:hover {
  background: rgba(59, 130, 246, 0.15);
}

.cloud-tag.tag-cat-databases {
  background: rgba(139, 92, 246, 0.08);
  color: #7c3aed;
  border-color: rgba(139, 92, 246, 0.15);
}
.cloud-tag.tag-cat-databases:hover {
  background: rgba(139, 92, 246, 0.15);
}

.cloud-tag.tag-cat-methodology {
  background: rgba(236, 72, 153, 0.08);
  color: #db2777;
  border-color: rgba(236, 72, 153, 0.15);
}
.cloud-tag.tag-cat-methodology:hover {
  background: rgba(236, 72, 153, 0.15);
}

/* Dark mode variants */
.tag-cloud-dark .cloud-tag.tag-cat-architecture {
  background: rgba(239, 63, 41, 0.12);
  color: #fb7a6a;
}
.tag-cloud-dark .cloud-tag.tag-cat-security {
  background: rgba(128, 47, 185, 0.15);
  color: #b87ee6;
}
.tag-cloud-dark .cloud-tag.tag-cat-frontend {
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
}
.tag-cloud-dark .cloud-tag.tag-cat-backend {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
}
.tag-cloud-dark .cloud-tag.tag-cat-devops {
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
}
.tag-cloud-dark .cloud-tag.tag-cat-databases {
  background: rgba(139, 92, 246, 0.12);
  color: #a78bfa;
}
.tag-cloud-dark .cloud-tag.tag-cat-methodology {
  background: rgba(236, 72, 153, 0.12);
  color: #f472b6;
}
</style>
