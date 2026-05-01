# Demo OFAC Policy
# --------------------------------

package demo_ofac

# Allow request only if no checks fail
default allow := false

to_address := input.to
checked_address := data.wasm.address
is_sanctioned := data.wasm.sanctioned

allow if {
    lower(checked_address) == lower(to_address)
    not is_sanctioned
}
