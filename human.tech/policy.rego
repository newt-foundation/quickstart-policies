# Human.tech Demo Policy
# --------------------------------

package human_tech_demo

# Allow request only if no checks fail
default allow := true
allow := false if {
    deny
}

# From Intent
to_address := input.to

# Policy Params
check_stamps_score = data.params.chech_stamps_score

# Models score Params
check_models_score = data.params.check_models_score
models_score_threshold = data.params.model_score_threshold

# Proof of clean hands params
check_poch = data.params.check_poch
poch_score_threshold = data.params.poch_score_threshold

# Stamps score
is_stamps_score_passing := data.data.stamps_score.passing_score

# Models score
models_score := data.data.models_score.details.models.aggregate.score

# Proof of clean hands
poch_score := data.data.proof_of_clean_hands.total

deny if {
    lower(checked_address) != lower(to_address)
}

deny if {
    check_stamps_score
    !is_stamps_score_passing
}

deny if {
    check_models_score
    models_score < models_score_threshold
}

deny if {
    check_poch
    poch_score < poch_score_threshold
}
