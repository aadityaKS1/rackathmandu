from django.contrib.postgres.search import SearchQuery, SearchRank
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Question
from .serializers import QuestionListSerializer, QuestionDetailSerializer


@api_view(['GET'])
def search_questions(request):
    query_text = request.GET.get('q', '').strip()

    # If no search term, return nothing
    if not query_text:
        return Response([])

    query = SearchQuery(query_text, config='english')

    results = (
        Question.objects
        .filter(search_vector=query)
        .annotate(rank=SearchRank('search_vector', query))
        .order_by('-rank')[:5]
    )

    serializer = QuestionListSerializer(results, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_question(request, slug):
    try:
        question = Question.objects.get(slug=slug)
    except Question.DoesNotExist:
        return Response(
            {'error': 'Question not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = QuestionDetailSerializer(question)
    return Response(serializer.data)



@api_view(['GET'])
def get_suggestions(request):
    questions = (
        Question.objects
        .filter(is_featured=True)
        .values('id', 'text', 'slug')
        [:6]
    )
    return Response(list(questions))