import { useMemo } from 'react'
import { getProjects, getProjectById } from '../services/projectService'

export function useProjects() {
  return useMemo(() => getProjects(), [])
}

export function useProject(id) {
  return useMemo(() => (id ? getProjectById(id) : null), [id])
}
