<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render (h) {
    const contents = this.panes.map(pane => {
      return pane.active ? pane.$slots.default : null
    })
    return (
      <div class="tab-content">
        {contents}
      </div>
    )
  }
}
</script>
