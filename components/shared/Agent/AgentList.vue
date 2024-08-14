<template>
  <div class="wrapper">
    <AgentCard class="agent-card" />
    <AgentCard class="agent-card" />
    <AgentCard class="agent-card" />
    <AgentCard class="agent-card" />
    <AgentCard class="agent-card" />
    <AgentCard class="agent-card" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.agent-card+.agent-card {
  margin-top: 12px;
}
</style>
